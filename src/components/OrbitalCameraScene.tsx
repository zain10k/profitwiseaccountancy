import { useRef, useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Application, SPEObject } from '@splinetool/runtime'

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// interface CameraPosition {
//   x: number
//   y: number
//   z: number
// }

interface ServiceModalData {
  title: string
  description: string
  platformName: string
}

// Define three camera positions for different sections
const CAMERA_POSITIONS = {
  home: { x: 1653.58, y: 1834.46, z: 1559.88 },      // Initial home view
  services: { x: 2200, y: 1500, z: 2000 },            // Services view - orbital position
  contact: { x: 1200, y: 2200, z: 1800 }              // Contact view - another orbital position
}

// Calculate responsive camera positions based on viewport height
const getResponsiveCameraPositions = () => {
  const viewportHeight = window.innerHeight
  const baseHeight = 1080 // Base design height
  const scaleFactor = Math.min(viewportHeight / baseHeight, 1.5) // Cap at 1.5x
  
  // Scale the vertical (y) distances proportionally
  const scaleY = (y: number) => {
    const centerY = 1800 // Approximate center Y position
    return centerY + (y - centerY) * scaleFactor
  }
  
  return {
    home: { 
      x: CAMERA_POSITIONS.home.x, 
      y: scaleY(CAMERA_POSITIONS.home.y), 
      z: CAMERA_POSITIONS.home.z 
    },
    services: { 
      x: CAMERA_POSITIONS.services.x, 
      y: scaleY(CAMERA_POSITIONS.services.y), 
      z: CAMERA_POSITIONS.services.z 
    },
    contact: { 
      x: CAMERA_POSITIONS.contact.x, 
      y: scaleY(CAMERA_POSITIONS.contact.y), 
      z: CAMERA_POSITIONS.contact.z 
    }
  }
}

interface OrbitalCameraSceneProps {
  /** Spline scene URL */
  sceneUrl?: string
  /** Container className for styling */
  className?: string
  /** Callback when a platform is clicked */
  onPlatformClick?: (platformName: string) => void
}

export function OrbitalCameraScene({ 
  sceneUrl = "https://prod.spline.design/inTyBAsCyiY4aWGe/scene.splinecode",
  className = "",
  onPlatformClick
}: OrbitalCameraSceneProps) {
  const splineRef = useRef<Application | null>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const particlesRef = useRef<SPEObject[]>([])
  const velocityRef = useRef<number>(0)
  const driftTimelineRef = useRef<gsap.core.Timeline | null>(null)
  const platformCleanupRef = useRef<(() => void) | null>(null)
  // const hoveredPlatformRef = useRef<string | null>(null) // Reserved for mouseMove hover effects
  
  // State for service modal
  const [modalData, setModalData] = useState<ServiceModalData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle Spline load and store instance
  const onLoad = (spline: Application) => {
    splineRef.current = spline
    console.log('Spline scene loaded:', spline)
    
    // Initialize all features
    initializeCameraAnimation()
    initializeParticles()
    initializePlatformInteractions()
  }
  
  // Initialize particle system for velocity-based effects
  const initializeParticles = () => {
    const spline = splineRef.current
    if (!spline) return
    
    // Find all particle objects (adjust names based on your Spline scene)
    const particleNames = ['0b', '1b', '2b', '3b', '0', '1', '2', '3'] // Rectangle clone names
    
    particleNames.forEach(name => {
      const particle = spline.findObjectByName(name)
      if (particle) {
        particlesRef.current.push(particle)
        // Set initial state
        if (particle.scale) {
          particle.scale.x = 1
          particle.scale.y = 1
          particle.scale.z = 1
        }
        // Note: Material opacity may need to be set differently based on Spline runtime
      }
    })
    
    console.log(`Found ${particlesRef.current.length} particles`)
    
    // Start drift animation loop
    startDriftAnimation()
  }
  
  // Initialize platform click interactions
  const initializePlatformInteractions = () => {
    const spline = splineRef.current
    if (!spline) return
    
    // Find platform objects (adjust names based on your Spline scene)
    const platformNames = ['Clone 0', 'Clone 1', 'Clone 2b', 'Clone 3']
    const serviceData: Record<string, ServiceModalData> = {
      'Clone 0': {
        title: 'Tax Planning Services',
        description: 'Comprehensive tax planning and optimization strategies for businesses and individuals.',
        platformName: 'Clone 0'
      },
      'Clone 1': {
        title: 'Business Advisory',
        description: 'Strategic business advice to help you grow and scale your operations.',
        platformName: 'Clone 1'
      },
      'Clone 2b': {
        title: 'Audit & Assurance',
        description: 'Professional audit services ensuring compliance and financial accuracy.',
        platformName: 'Clone 2b'
      },
      'Clone 3': {
        title: 'Payroll Services',
        description: 'Complete payroll management and pension administration services.',
        platformName: 'Clone 3'
      }
    }
    
    // Store platform objects for reference
    const platforms: Record<string, SPEObject> = {}
    platformNames.forEach(name => {
      const platform = spline.findObjectByName(name)
      if (platform) {
        platforms[name] = platform
      }
    })
    
    // Use Spline's application-level event system
    const handleMouseDown = (e: any) => {
      const target = e.target
      if (!target || !target.name) return
      
      // Check if clicked object is one of our platforms
      const platformName = platformNames.find(name => {
        const platform = platforms[name]
        return platform && (target === platform || target.name === name)
      })
      
      if (platformName && platforms[platformName]) {
        console.log(`Platform clicked: ${platformName}`)
        
        // Zoom camera closer on click
        zoomCameraToTarget(platforms[platformName])
        
        // Open modal with service data
        if (serviceData[platformName]) {
          setModalData(serviceData[platformName])
          setIsModalOpen(true)
        }
        
        // Call optional callback
        if (onPlatformClick) {
          onPlatformClick(platformName)
        }
      }
    }
    
    // Mouse move handler - currently disabled as 'mouseMove' event may not be supported
    // const handleMouseMove = (e: any) => {
    //   const target = e.target
    //   if (!target || !target.name) {
    //     document.body.style.cursor = 'default'
    //     // Reset hover state if needed
    //     if (hoveredPlatformRef.current) {
    //       const prevPlatform = platforms[hoveredPlatformRef.current]
    //       if (prevPlatform) {
    //         gsap.to(prevPlatform.scale, { x: 1, y: 1, z: 1, duration: 0.3 })
    //       }
    //       hoveredPlatformRef.current = null
    //     }
    //     return
    //   }
    //   
    //   // Find which platform is being hovered
    //   const hoveredName = platformNames.find(name => {
    //     const platform = platforms[name]
    //     return platform && (target === platform || target.name === name)
    //   })

    //   if (hoveredName) {
    //     document.body.style.cursor = 'pointer'
    //     
    //     // Only animate if this is a new hover
    //     if (hoveredPlatformRef.current !== hoveredName) {
    //       // Reset previous
    //       if (hoveredPlatformRef.current) {
    //          const prevPlatform = platforms[hoveredPlatformRef.current]
    //          if (prevPlatform) {
    //            gsap.to(prevPlatform.scale, { x: 1, y: 1, z: 1, duration: 0.3 })
    //          }
    //       }
    //       
    //       // Animate current
    //       hoveredPlatformRef.current = hoveredName
    //       const platform = platforms[hoveredName]
    //       gsap.to(platform.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.3, ease: "back.out(1.7)" })
    //     }
    //   } else {
    //     document.body.style.cursor = 'default'
    //     // Reset if we moved off a platform onto something else
    //     if (hoveredPlatformRef.current) {
    //       const prevPlatform = platforms[hoveredPlatformRef.current]
    //       if (prevPlatform) {
    //         gsap.to(prevPlatform.scale, { x: 1, y: 1, z: 1, duration: 0.3 })
    //       }
    //       hoveredPlatformRef.current = null
    //     }
    //   }
    // }
    
    // Add event listeners to the Spline application
    spline.addEventListener('mouseDown', handleMouseDown)
    // Note: 'mouseMove' may not be a valid Spline event - using 'mouseHover' or removing if not supported
    // spline.addEventListener('mouseMove', handleMouseMove)
    
    // Store cleanup function
    platformCleanupRef.current = () => {
      spline.removeEventListener('mouseDown', handleMouseDown)
      // spline.removeEventListener('mouseMove', handleMouseMove)
    }
  }
  
  // Zoom camera to clicked platform
  const zoomCameraToTarget = (_target: SPEObject) => {
    const spline = splineRef.current
    if (!spline) return
    
    const camera = spline.findObjectByName('Camera')
    if (!camera) return
    
    // Store current camera position
    const currentZ = camera.position.z
    
    // Zoom in by moving closer on z-axis
    gsap.to(camera.position, {
      z: currentZ - 300, // Move 300 units closer
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        // Optional: Zoom back out after delay
        setTimeout(() => {
          gsap.to(camera.position, {
            z: currentZ,
            duration: 0.8,
            ease: 'power2.inOut'
          })
        }, 2000)
      }
    })
  }
  
  // Drift animation for particles when not scrolling
  const startDriftAnimation = () => {
    if (particlesRef.current.length === 0) return
    
    driftTimelineRef.current = gsap.timeline({ repeat: -1, yoyo: true })
    
    particlesRef.current.forEach((particle, index) => {
      const delay = index * 0.2
      const driftAmount = 20 + Math.random() * 30
      
      driftTimelineRef.current!.to(
        particle.position,
        {
          y: `+=${driftAmount}`,
          duration: 4 + Math.random() * 3, // Slower, more floaty
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true
        },
        delay
      )
      
      driftTimelineRef.current!.to(
        particle.rotation,
        {
          z: `+=${Math.PI * 0.1}`,
          duration: 5 + Math.random() * 3, // Slower rotation
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true
        },
        delay
      )
    })
  }

  const initializeCameraAnimation = () => {
    const spline = splineRef.current
    if (!spline) return

    // Get the camera object from Spline
    const camera = spline.findObjectByName('Camera')
    if (!camera) {
      console.warn('Camera not found in Spline scene')
      return
    }

    console.log('Camera found:', camera)
    console.log('Initial camera position:', camera.position)

    // Get responsive camera positions based on viewport height
    const responsivePositions = getResponsiveCameraPositions()

    // Create GSAP quickSetters for smooth performance
    const setCameraX = gsap.quickSetter(camera.position, 'x')
    const setCameraY = gsap.quickSetter(camera.position, 'y')
    const setCameraZ = gsap.quickSetter(camera.position, 'z')

    // Create timeline with ScrollTrigger
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,              // Smoother scrubbing with 1.5 second delay
        markers: false,        // Set to true for debugging
        onUpdate: (self) => {
          // Get scroll velocity
          const velocity = Math.abs(self.getVelocity() / 1000) // Normalize velocity
          velocityRef.current = velocity
          
          // Update particle effects based on velocity
          updateParticleEffects(velocity)
          
          // Optional: Log progress during development
          // console.log('Scroll velocity:', velocity.toFixed(2))
        }
      }
    })

    // Define camera movement timeline with three positions (responsive)
    // Each label represents a scroll marker
    timelineRef.current
      .addLabel('home', 0)
      .to({}, {
        duration: 0.5,
        onUpdate: function() {
          const progress = this.progress()
          // Interpolate from home to services (using responsive positions)
          const x = gsap.utils.interpolate(
            responsivePositions.home.x,
            responsivePositions.services.x,
            progress
          )
          const y = gsap.utils.interpolate(
            responsivePositions.home.y,
            responsivePositions.services.y,
            progress
          )
          const z = gsap.utils.interpolate(
            responsivePositions.home.z,
            responsivePositions.services.z,
            progress
          )
          
          setCameraX(x)
          setCameraY(y)
          setCameraZ(z)
        }
      })
      .addLabel('services', 0.5)
      .to({}, {
        duration: 0.5,
        onUpdate: function() {
          const progress = this.progress()
          // Interpolate from services to contact (using responsive positions)
          const x = gsap.utils.interpolate(
            responsivePositions.services.x,
            responsivePositions.contact.x,
            progress
          )
          const y = gsap.utils.interpolate(
            responsivePositions.services.y,
            responsivePositions.contact.y,
            progress
          )
          const z = gsap.utils.interpolate(
            responsivePositions.services.z,
            responsivePositions.contact.z,
            progress
          )
          
          setCameraX(x)
          setCameraY(y)
          setCameraZ(z)
        }
      })
      .addLabel('contact', 1)

    console.log('Camera animation timeline created with responsive scaling')
  }
  
  // Update particle effects based on scroll velocity
  const updateParticleEffects = (velocity: number) => {
    if (particlesRef.current.length === 0) return
    
    // Map velocity to scale (0-3 range to 1-1.5 scale) - More dramatic effect
    const targetScale = 1 + Math.min(velocity * 0.5, 0.8)
    
    // Map velocity to opacity (0-3 range to 0.8-1 opacity)
    const targetOpacity = 0.8 + Math.min(velocity * 0.3, 0.4)
    
    // Pause drift animation when scrolling fast
    if (velocity > 0.5 && driftTimelineRef.current) {
      driftTimelineRef.current.pause()
    } else if (velocity < 0.1 && driftTimelineRef.current) {
      driftTimelineRef.current.resume()
    }
    
    particlesRef.current.forEach((particle, index) => {
      // Stagger the effect slightly
      const delay = index * 0.02
      
      // Animate scale
      gsap.to(particle.scale, {
        x: targetScale,
        y: targetScale,
        z: targetScale,
        duration: 0.3,
        delay: delay,
        ease: 'power2.out'
      })
      
      // Animate opacity if material exists
      if (particle.material) {
        gsap.to(particle.material, {
          opacity: targetOpacity,
          duration: 0.3,
          delay: delay,
          ease: 'power2.out'
        })
      }
    })
  }
  
  // Close modal handler
  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setModalData(null), 300) // Clear data after animation
  }

  useEffect(() => {
    // Handle window resize for responsive camera positions
    const handleResize = () => {
      if (timelineRef.current) {
        // Refresh ScrollTrigger on resize
        ScrollTrigger.refresh()
      }
    }
    
    window.addEventListener('resize', handleResize)
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      
      // Cleanup platform event listeners
      if (platformCleanupRef.current) {
        platformCleanupRef.current()
        platformCleanupRef.current = null
      }
      
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
      
      if (driftTimelineRef.current) {
        driftTimelineRef.current.kill()
      }
      
      if (splineRef.current) {
        // Cleanup Spline instance if needed
      }
    }
  }, [])

  return (
    <>
      <div className={`orbital-camera-scene ${className}`}>
        <Spline
          scene={sceneUrl}
          onLoad={onLoad}
        />
      </div>
      
      {/* Service Modal */}
      {isModalOpen && modalData && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-lg w-full mx-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal content */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                {modalData.title}
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {modalData.description}
              </p>
              
              <div className="pt-4 flex gap-3">
                <button
                  className="flex-1 bg-primary text-white font-semibold py-3 px-6 rounded-full hover:brightness-110 transition-all"
                  onClick={() => {
                    closeModal()
                    // Navigate to services or contact
                    window.location.href = '/services'
                  }}
                >
                  Learn More
                </button>
                
                <button
                  className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold py-3 px-6 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
