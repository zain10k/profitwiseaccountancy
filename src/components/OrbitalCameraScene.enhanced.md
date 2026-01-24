# OrbitalCameraScene - Enhanced Features

## 🎉 New Features Added

### 1. ⚡ Velocity-Based Particle Effects

Particles now respond dynamically to scroll velocity:

**When Scrolling Fast:**
- Particles scale up (1.0x → 1.5x)
- Particles fade in (opacity: 0.8 → 1.0)
- Drift animation pauses for crisp motion

**When Scrolling Stops:**
- Particles return to normal scale
- Drift animation resumes
- Gentle floating motion with rotation

**Implementation:**
```typescript
const updateParticleEffects = (velocity: number) => {
  // Map velocity to scale (0-3 range to 1-1.5 scale)
  const targetScale = 1 + Math.min(velocity * 0.2, 0.5)
  
  // Map velocity to opacity (0-3 range to 0.8-1 opacity)
  const targetOpacity = 0.8 + Math.min(velocity * 0.1, 0.2)
  
  // Pause drift when scrolling fast
  if (velocity > 0.5) driftTimelineRef.current?.pause()
  else if (velocity < 0.1) driftTimelineRef.current?.resume()
}
```

**How It Works:**
- ScrollTrigger's `self.getVelocity()` tracks scroll speed
- Velocity is normalized (divided by 1000)
- `gsap.quickSetter()` updates particle scale and opacity
- Staggered animation (0.02s delay per particle)

---

### 2. 🖱️ Platform Interaction System

Click any glass platform to trigger interactive experiences:

**Features:**
- Camera zooms in 300 units on Z-axis (0.8s animation)
- Service modal opens with platform details
- Auto zoom-out after 2 seconds
- Hover effects (cursor changes to pointer)

**Platform Names (adjust for your scene):**
```typescript
const platforms = [
  'Clone 0',   // Tax Planning
  'Clone 1',   // Business Advisory
  'Clone 2b',  // Audit & Assurance
  'Clone 3'    // Payroll Services
]
```

**Modal Data Structure:**
```typescript
interface ServiceModalData {
  title: string           // "Tax Planning Services"
  description: string     // Full service description
  platformName: string    // Spline object name
}
```

**Event Handlers:**
```typescript
platform.addEventListener('pointerdown', (event) => {
  zoomCameraToTarget(platform)      // Zoom animation
  setModalData(serviceData[name])   // Set modal content
  setIsModalOpen(true)              // Open modal
  onPlatformClick?.(name)           // Optional callback
})
```

**Modal UI:**
- Tailwind-styled with backdrop blur
- Click outside to close
- Two CTAs: "Learn More" and "Close"
- Responsive design
- Dark mode support

---

### 3. 📱 Responsive Camera Scaling

Camera travel distance now adapts to viewport height:

**Algorithm:**
```typescript
const getResponsiveCameraPositions = () => {
  const viewportHeight = window.innerHeight
  const baseHeight = 1080 // Base design height
  const scaleFactor = Math.min(viewportHeight / baseHeight, 1.5) // Cap at 1.5x
  
  // Scale vertical (y) distances proportionally
  const scaleY = (y: number) => {
    const centerY = 1800 // Approximate center Y position
    return centerY + (y - centerY) * scaleFactor
  }
}
```

**Benefits:**
- **Small screens** (mobile): Shorter camera travel = tighter narrative
- **Large screens** (desktop): Fuller camera movement
- **Ultra-wide**: Capped at 1.5x to prevent excessive motion

**Responsive Breakpoints:**
- Mobile (375px): 0.35x scale factor
- Tablet (768px): 0.71x scale factor
- Laptop (1080px): 1.0x scale factor (base)
- Desktop (1440px): 1.33x scale factor
- 4K (2160px): 1.5x scale factor (capped)

**Automatic Updates:**
- Window resize listener refreshes ScrollTrigger
- Camera positions recalculated on resize
- Smooth transitions between sizes

---

## 🎛️ Configuration

### Velocity Sensitivity

Adjust particle responsiveness:

```typescript
// More sensitive (faster response)
const targetScale = 1 + Math.min(velocity * 0.3, 0.5)

// Less sensitive (slower response)
const targetScale = 1 + Math.min(velocity * 0.1, 0.5)
```

### Zoom Distance

Change camera zoom amount:

```typescript
z: currentZ - 300,  // Default: 300 units closer
z: currentZ - 500,  // Closer zoom
z: currentZ - 150,  // Subtle zoom
```

### Drift Animation

Customize drift behavior:

```typescript
driftTimelineRef.current!.to(particle.position, {
  y: `+=${driftAmount}`,
  duration: 3,          // Speed: lower = faster
  ease: 'sine.inOut',   // Easing: 'power1', 'elastic', etc.
})
```

### Modal Styling

Customize modal appearance in Tailwind classes:

```typescript
className="relative max-w-lg w-full mx-4 
  bg-white dark:bg-slate-900 
  rounded-2xl shadow-2xl p-8"
```

---

## 📊 Performance Metrics

### Velocity Calculation
- Sampled every ScrollTrigger update (~60fps)
- Normalized velocity: 0-3 range (typical)
- Fast scroll: 2-5 velocity
- Slow scroll: 0.1-1 velocity

### Particle Updates
- Uses `gsap.quickSetter()` for 60fps performance
- Staggered by 0.02s (20ms) per particle
- 8 particles = 160ms total stagger

### Camera Zoom
- 0.8s animation duration
- `power2.inOut` easing for smooth feel
- Auto-revert after 2s (configurable)

---

## 🐛 Debugging

### Enable ScrollTrigger Markers

```typescript
scrollTrigger: {
  markers: true,  // Shows scroll positions
  // ...
}
```

### Log Velocity

```typescript
onUpdate: (self) => {
  console.log('Velocity:', Math.abs(self.getVelocity() / 1000))
}
```

### Check Platform Names

```typescript
initializePlatformInteractions = () => {
  const allObjects = spline.getAllObjects()
  console.log('All Spline objects:', allObjects.map(o => o.name))
}
```

### Verify Particles

```typescript
console.log(`Found ${particlesRef.current.length} particles`)
particlesRef.current.forEach(p => console.log('Particle:', p.name))
```

---

## 🎨 Customization Examples

### Example 1: Add More Platforms

```typescript
const serviceData = {
  'MyPlatform': {
    title: 'New Service',
    description: 'Custom service description',
    platformName: 'MyPlatform'
  }
}
```

### Example 2: Change Particle Names

```typescript
const particleNames = [
  'particle_01', 'particle_02', 'particle_03',
  // Your custom names from Spline
]
```

### Example 3: Custom Zoom Behavior

```typescript
const zoomCameraToTarget = (target: SPEObject) => {
  const camera = spline.findObjectByName('Camera')
  
  // Custom: Rotate camera during zoom
  gsap.to(camera.rotation, {
    y: camera.rotation.y + Math.PI * 0.25,
    duration: 0.8,
    ease: 'power2.inOut'
  })
  
  // No auto zoom-out
  gsap.to(camera.position, {
    z: currentZ - 300,
    duration: 0.8,
    ease: 'power2.inOut'
    // onComplete removed
  })
}
```

### Example 4: Responsive Scale Factor

```typescript
// More aggressive scaling for small screens
const scaleFactor = viewportHeight < 768 
  ? Math.min(viewportHeight / baseHeight, 0.8)  // Max 0.8x on mobile
  : Math.min(viewportHeight / baseHeight, 1.5)  // Max 1.5x on desktop
```

---

## 🚀 Usage with Props

```tsx
<OrbitalCameraScene
  sceneUrl="https://prod.spline.design/YOUR_SCENE/scene.splinecode"
  className="w-full h-full"
  onPlatformClick={(platformName) => {
    console.log(`Platform clicked: ${platformName}`)
    // Custom analytics, routing, etc.
  }}
/>
```

---

## 📝 Complete Feature Checklist

- [x] Velocity-based particle scaling
- [x] Velocity-based particle opacity
- [x] Drift animation on idle
- [x] Platform click detection
- [x] Camera zoom on click
- [x] Service modal with Tailwind
- [x] Modal click-outside-to-close
- [x] Responsive camera scaling
- [x] Window resize handling
- [x] ScrollTrigger refresh on resize
- [x] Dark mode support
- [x] TypeScript types
- [x] Proper cleanup on unmount

All three requested features are fully implemented and production-ready!
