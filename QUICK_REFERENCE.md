# 🚀 OrbitalCameraScene - Quick Reference Guide

## 📋 Feature Overview

```
┌─────────────────────────────────────────────────────┐
│          OrbitalCameraScene Component               │
├─────────────────────────────────────────────────────┤
│                                                     │
│  1️⃣  VELOCITY MAPPING                              │
│      ⚡ Scroll fast → Particles scale up & fade in │
│      🌊 Scroll stop → Particles drift gently       │
│      📊 Uses: self.getVelocity() from ScrollTrigger│
│                                                     │
│  2️⃣  PLATFORM INTERACTION                          │
│      🖱️  Click platform → Camera zooms in          │
│      📱 Modal opens → Service details shown         │
│      🔄 Auto zoom-out → Returns after 2s           │
│                                                     │
│  3️⃣  RESPONSIVE SCALING                            │
│      📱 Small screens → Tighter camera movement    │
│      🖥️  Large screens → Fuller camera orbit       │
│      🔄 Window resize → Auto-adjusts positions     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🎯 Quick Start

### Basic Implementation:

```tsx
import { OrbitalCameraScene } from '@/components/OrbitalCameraScene'

function App() {
  return (
    <div className="fixed inset-0">
      <OrbitalCameraScene />
    </div>
  )
}
```

### With All Options:

```tsx
<OrbitalCameraScene
  sceneUrl="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  className="w-full h-full custom-class"
  onPlatformClick={(platformName) => {
    console.log(`Platform clicked: ${platformName}`)
    // Analytics, routing, etc.
  }}
/>
```

---

## ⚙️ Configuration Quick Reference

### 1. Velocity Sensitivity

**Location:** `updateParticleEffects()` function

```typescript
// Current (moderate)
const targetScale = 1 + Math.min(velocity * 0.2, 0.5)

// More sensitive
const targetScale = 1 + Math.min(velocity * 0.3, 0.5)

// Less sensitive
const targetScale = 1 + Math.min(velocity * 0.1, 0.5)
```

### 2. Zoom Distance

**Location:** `zoomCameraToTarget()` function

```typescript
// Current (moderate zoom)
z: currentZ - 300

// Closer zoom
z: currentZ - 500

// Subtle zoom
z: currentZ - 150
```

### 3. Responsive Scale Factor

**Location:** `getResponsiveCameraPositions()` function

```typescript
// Current (capped at 1.5x)
const scaleFactor = Math.min(viewportHeight / baseHeight, 1.5)

// More aggressive (capped at 2x)
const scaleFactor = Math.min(viewportHeight / baseHeight, 2.0)

// Conservative (capped at 1.2x)
const scaleFactor = Math.min(viewportHeight / baseHeight, 1.2)
```

---

## 🎨 Customize for Your Scene

### Step 1: Update Particle Names

**Find your particle objects in Spline, then:**

```typescript
// Line ~101 in OrbitalCameraScene.tsx
const particleNames = [
  'particle_01',    // Replace with your names
  'particle_02',
  'particle_03',
  // ... add more
]
```

### Step 2: Update Platform Names

**Find your platform objects in Spline, then:**

```typescript
// Line ~127 in OrbitalCameraScene.tsx
const platformNames = [
  'Platform_Tax',     // Replace with your names
  'Platform_Advisory',
  'Platform_Audit',
  // ... add more
]
```

### Step 3: Update Camera Positions

**Position camera in Spline editor, note X/Y/Z, then:**

```typescript
// Line ~23 in OrbitalCameraScene.tsx
const CAMERA_POSITIONS = {
  home:     { x: 1653.58, y: 1834.46, z: 1559.88 },  // Your positions
  services: { x: 2200,    y: 1500,    z: 2000    },
  contact:  { x: 1200,    y: 2200,    z: 1800    }
}
```

### Step 4: Update Service Data

**Add your service information:**

```typescript
// Line ~128 in OrbitalCameraScene.tsx
const serviceData: Record<string, ServiceModalData> = {
  'Platform_Tax': {
    title: 'Your Service Title',
    description: 'Your service description...',
    platformName: 'Platform_Tax'
  },
  // ... add more
}
```

---

## 🔍 Debug Mode

### Enable ScrollTrigger Markers:

```typescript
// Line ~232 in OrbitalCameraScene.tsx
scrollTrigger: {
  markers: true,  // Change to true
  // ...
}
```

### Log Velocity Values:

```typescript
// Line ~238 in OrbitalCameraScene.tsx
onUpdate: (self) => {
  const velocity = Math.abs(self.getVelocity() / 1000)
  console.log('Velocity:', velocity)  // Add this line
  updateParticleEffects(velocity)
}
```

### Check Spline Objects:

```typescript
// Add in onLoad() function
const onLoad = (spline: Application) => {
  splineRef.current = spline
  
  // Debug: Log all objects
  console.log('All Spline objects:', 
    spline.getAllObjects().map(o => o.name)
  )
  
  // ... rest of function
}
```

---

## 📊 Performance Tips

| Action | Impact | When to Use |
|--------|--------|-------------|
| Reduce particle count | +10-15fps | Many particles (>20) |
| Lower scrub value | More responsive | Fast-paced designs |
| Increase scrub value | Smoother motion | Cinematic feel |
| Disable drift on mobile | +5-10fps | Mobile performance |
| Reduce stagger delay | Faster animations | Quick interactions |

### Example: Mobile Optimization

```typescript
// Detect mobile and adjust
const isMobile = window.innerWidth < 768

const staggerDelay = isMobile ? 0.01 : 0.02  // Faster on mobile
const driftEnabled = !isMobile                 // Disable drift on mobile
```

---

## 🎬 Animation Timing Reference

| Animation | Duration | Easing | Purpose |
|-----------|----------|--------|---------|
| Camera orbit | Scroll-driven | Linear (scrub: 1) | Smooth scrolling |
| Particle scale | 0.3s | power2.out | Velocity response |
| Camera zoom | 0.8s | power2.inOut | Platform click |
| Drift motion | 3-5s | sine.inOut | Idle floating |
| Modal fade | 0.3s | ease-out | Open/close |

---

## 🐛 Common Issues & Solutions

### Issue: Camera not moving
**Solution:** Check camera name in Spline matches `'Camera'` in code

```typescript
const camera = spline.findObjectByName('Camera')  // Update if different
```

### Issue: Particles not responding
**Solution:** Verify particle names match Spline scene

```typescript
const particleNames = ['0b', '1b', ...]  // Update to match your scene
```

### Issue: Platforms not clickable
**Solution:** Ensure platform names are correct and objects are interactive

```typescript
const platformNames = ['Clone 0', ...]  // Update to match your scene
```

### Issue: Zoom too slow/fast
**Solution:** Adjust duration

```typescript
gsap.to(camera.position, {
  z: currentZ - 300,
  duration: 0.8,  // Increase (slower) or decrease (faster)
})
```

### Issue: Responsive scaling too aggressive
**Solution:** Adjust scale factor cap

```typescript
const scaleFactor = Math.min(viewportHeight / baseHeight, 1.5)  // Lower cap
```

---

## 📱 Responsive Behavior

```
Mobile (375px)     →  Scale: 0.35x  →  Tight movement
    ↓
Tablet (768px)     →  Scale: 0.71x  →  Moderate travel
    ↓
Laptop (1080px)    →  Scale: 1.00x  →  Base design
    ↓
Desktop (1440px)   →  Scale: 1.33x  →  Expanded orbit
    ↓
4K (2160px)        →  Scale: 1.50x  →  Maximum (capped)
```

---

## 🎯 Integration Patterns

### Pattern 1: Full-Page Scroll Experience

```tsx
<div className="relative">
  <div className="fixed inset-0 -z-10">
    <OrbitalCameraScene />
  </div>
  <div className="relative z-10">
    <section className="min-h-screen">Home</section>
    <section className="min-h-screen">Services</section>
    <section className="min-h-screen">Contact</section>
  </div>
</div>
```

### Pattern 2: Hero Section Only

```tsx
<div className="h-screen relative">
  <OrbitalCameraScene />
  <div className="absolute inset-0 z-10">
    <h1>Your Content</h1>
  </div>
</div>
```

### Pattern 3: With Custom Overlay

```tsx
<div className="relative h-screen">
  <OrbitalCameraScene />
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
</div>
```

---

## 🚀 Production Checklist

- [ ] Updated particle names to match Spline scene
- [ ] Updated platform names to match Spline scene
- [ ] Configured camera positions for your design
- [ ] Added service modal content
- [ ] Tested on mobile devices
- [ ] Tested on tablet devices
- [ ] Tested on desktop devices
- [ ] Verified scroll velocity feels right
- [ ] Tested platform interactions
- [ ] Verified modal opens/closes correctly
- [ ] Tested window resize behavior
- [ ] Checked performance (60fps target)
- [ ] Disabled debug markers
- [ ] Added analytics tracking (optional)

---

## 📚 File Reference

```
src/components/
├── OrbitalCameraScene.tsx          ← Main component (USE THIS)
├── OrbitalCameraScene.example.tsx  ← Usage examples
├── OrbitalCameraScene.demo.tsx     ← Full demo page
└── OrbitalCameraScene.enhanced.md  ← Detailed docs

Project Root/
├── ORBITAL_CAMERA_README.md        ← Original README
├── FEATURES_IMPLEMENTATION_SUMMARY.md ← Feature summary
└── QUICK_REFERENCE.md              ← This file
```

---

## 🎉 You're Ready!

All three features are implemented and ready to use:

1. ✅ **Velocity Mapping** - Particles respond to scroll speed
2. ✅ **Platform Interaction** - Click to zoom and open modals
3. ✅ **Responsive Scaling** - Camera adapts to screen size

**Next Step:** Import the component and start customizing for your scene!

```tsx
import { OrbitalCameraScene } from '@/components/OrbitalCameraScene'
```

Happy coding! 🚀
