/**
 * COMPLETE DEMO: OrbitalCameraScene with All Three Features
 * 
 * This demo showcases:
 * 1. Velocity-based particle effects
 * 2. Platform interactions with modals
 * 3. Responsive camera scaling
 */

import { OrbitalCameraScene } from './OrbitalCameraScene'
import { useState } from 'react'

export function OrbitalCameraDemo() {
  const [clickedPlatform, setClickedPlatform] = useState<string | null>(null)
  // const [velocityLog, setVelocityLog] = useState<number[]>([]) // Reserved for debugging

  const handlePlatformClick = (platformName: string) => {
    setClickedPlatform(platformName)
    console.log(`🎯 Platform Interaction: ${platformName}`)
    
    // Optional: Send analytics
    // analytics.track('platform_clicked', { platform: platformName })
  }

  return (
    <div className="relative min-h-screen">
      {/* Debug Panel (Development Only) */}
      <div className="fixed top-20 right-4 z-50 bg-black/80 backdrop-blur-md text-white p-4 rounded-lg max-w-xs">
        <h3 className="text-sm font-bold mb-2">🔍 Debug Panel</h3>
        
        <div className="space-y-2 text-xs">
          <div>
            <span className="text-slate-400">Viewport:</span>{' '}
            <span className="text-green-400">{window.innerHeight}px</span>
          </div>
          
          <div>
            <span className="text-slate-400">Last Clicked:</span>{' '}
            <span className="text-blue-400">{clickedPlatform || 'None'}</span>
          </div>
          
          <div className="pt-2 border-t border-slate-600">
            <p className="text-slate-400 mb-1">Features Active:</p>
            <ul className="space-y-1">
              <li>✅ Velocity Particles</li>
              <li>✅ Platform Interactions</li>
              <li>✅ Responsive Scaling</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-slate-600">
          <p className="text-xs text-slate-400 mb-1">Instructions:</p>
          <ul className="text-xs space-y-1">
            <li>🖱️ Scroll to see velocity effects</li>
            <li>👆 Click platforms for modals</li>
            <li>📱 Resize window for scaling</li>
          </ul>
        </div>
      </div>

      {/* Fixed 3D Background */}
      <div className="fixed inset-0 w-full h-screen">
        <OrbitalCameraScene 
          sceneUrl="https://prod.spline.design/inTyBAsCyiY4aWGe/scene.splinecode"
          className="w-full h-full"
          onPlatformClick={handlePlatformClick}
        />
      </div>

      {/* Overlay gradient for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/70 pointer-events-none" />

      {/* Scrollable Content Sections */}
      <div className="relative z-10">
        {/* Section 1: Home - Camera Position 1 */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl text-center text-white space-y-6">
            <div className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-4">
              🏠 Home View - Camera Position 1
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              Financial <span className="text-primary">Clarity</span>
            </h1>
            
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Scroll down to see velocity-based particle effects and camera movement
            </p>
            
            <div className="pt-8 space-y-2">
              <p className="text-sm text-slate-400">✨ Feature Highlights:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs">Velocity Particles</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs">Interactive Platforms</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs">Responsive Scaling</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Services - Camera Position 2 */}
        <section className="min-h-screen flex items-center justify-center px-4 bg-slate-900/30">
          <div className="max-w-4xl text-center text-white space-y-6">
            <div className="inline-block py-2 px-4 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 text-sm font-medium mb-4">
              💼 Services View - Camera Position 2 (Orbital)
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-bold mb-6">
              Interactive <span className="text-primary">Platforms</span>
            </h2>
            
            <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
              Click on any floating platform to zoom in and see service details
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <h3 className="font-semibold mb-2">Tax Planning</h3>
                <p className="text-sm text-slate-300">Platform: Clone 0</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <h3 className="font-semibold mb-2">Advisory</h3>
                <p className="text-sm text-slate-300">Platform: Clone 1</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <h3 className="font-semibold mb-2">Audit</h3>
                <p className="text-sm text-slate-300">Platform: Clone 2b</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <h3 className="font-semibold mb-2">Payroll</h3>
                <p className="text-sm text-slate-300">Platform: Clone 3</p>
              </div>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-slate-400">
                💡 Tip: Notice how particles scale up when you scroll fast
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Contact - Camera Position 3 */}
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-slate-900/30 to-slate-900">
          <div className="max-w-4xl text-center text-white space-y-6">
            <div className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-4">
              📱 Contact View - Camera Position 3 (Final Orbit)
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-bold mb-6">
              Responsive <span className="text-primary">Experience</span>
            </h2>
            
            <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
              Camera travel distance adapts to your screen size for optimal viewing
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 max-w-xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Screen Size Scaling</h3>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">📱 Mobile (375px)</span>
                  <span className="text-primary font-mono">0.35x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">📱 Tablet (768px)</span>
                  <span className="text-primary font-mono">0.71x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">💻 Laptop (1080px)</span>
                  <span className="text-primary font-mono">1.00x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">🖥️ Desktop (1440px)</span>
                  <span className="text-primary font-mono">1.33x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">🖥️ 4K (2160px)</span>
                  <span className="text-primary font-mono">1.50x</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6 space-y-4">
              <p className="text-sm text-slate-400">
                🎯 All three features working together seamlessly!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:brightness-110 transition-all">
                  Get Started
                </button>
                <button className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Extra scroll space for complete timeline */}
        <section className="h-screen bg-slate-900" />
      </div>
    </div>
  )
}

/**
 * FEATURE BREAKDOWN:
 * 
 * 1. VELOCITY MAPPING ⚡
 *    - Particles in scene respond to scroll speed
 *    - Fast scroll = scale up + fade in
 *    - Stop scroll = drift animation resumes
 *    - Uses self.getVelocity() from ScrollTrigger
 * 
 * 2. PLATFORM INTERACTION 🖱️
 *    - Click platforms to zoom camera
 *    - Opens modal with service details
 *    - Smooth 0.8s animation
 *    - Auto zoom-out after 2s
 * 
 * 3. RESPONSIVE SCALING 📱
 *    - Camera travel scales with viewport height
 *    - Small screens = tighter movement
 *    - Large screens = fuller orbit
 *    - Updates on window resize
 */
