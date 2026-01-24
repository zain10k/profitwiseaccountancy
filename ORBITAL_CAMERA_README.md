# OrbitalCameraScene Component

A React component that creates smooth, scroll-driven camera animations for Spline 3D scenes using GSAP ScrollTrigger.

## Features

- ✅ Loads Spline scenes via `@splinetool/react-spline`
- ✅ Smooth scroll-driven camera animation using GSAP ScrollTrigger
- ✅ Three predefined camera positions (Home, Services, Contact)
- ✅ Uses `gsap.quickSetter()` for optimal performance
- ✅ `scrub: 1` setting for smooth, natural motion
- ✅ TypeScript support with proper types
- ✅ Automatic cleanup on unmount

## Installation

The required dependencies are already installed:
```json
{
  "gsap": "^3.14.2",
  "@splinetool/react-spline": "^4.1.0"
}
```

ScrollTrigger is included with GSAP and imported separately.

## Basic Usage

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

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sceneUrl` | `string` | `"https://prod.spline.design/inTyBAsCyiY4aWGe/scene.splinecode"` | URL to your Spline scene |
| `className` | `string` | `""` | Additional CSS classes for the container |

## Camera Positions

The component defines three camera positions that the camera smoothly transitions between as you scroll:

```typescript
const CAMERA_POSITIONS = {
  home: { x: 1653.58, y: 1834.46, z: 1559.88 },      // Initial home view
  services: { x: 2200, y: 1500, z: 2000 },            // Services view - orbital position
  contact: { x: 1200, y: 2200, z: 1800 }              // Contact view - another orbital position
}
```

### How to Find Your Camera Positions

1. Open your Spline scene in the Spline editor
2. Position the camera where you want it for each view
3. Note the X, Y, Z coordinates from the camera properties panel
4. Update the `CAMERA_POSITIONS` object in `OrbitalCameraScene.tsx`

## Timeline Structure

The scroll timeline is divided into three sections:

- **0% - 50%**: Transition from `home` to `services`
- **50% - 100%**: Transition from `services` to `contact`

Timeline labels:
- `'home'` at 0%
- `'services'` at 50%
- `'contact'` at 100%

## ScrollTrigger Configuration

```typescript
scrollTrigger: {
  trigger: 'body',           // Trigger element (entire page)
  start: 'top top',          // Animation starts when page top hits viewport top
  end: 'bottom bottom',      // Animation ends when page bottom hits viewport bottom
  scrub: 1,                  // Smooth scrubbing with 1 second delay
  markers: false             // Set to true for debugging
}
```

## Performance Optimization

The component uses `gsap.quickSetter()` for maximum performance:

```typescript
const setCameraX = gsap.quickSetter(camera.position, 'x')
const setCameraY = gsap.quickSetter(camera.position, 'y')
const setCameraZ = gsap.quickSetter(camera.position, 'z')
```

This bypasses GSAP's normal processing and directly updates the camera position on every frame.

## Customization

### 1. Adjust Scrub Speed

Change the `scrub` value for different animation feels:

```typescript
scrub: 0.5,  // Faster, more responsive
scrub: 1,    // Balanced (default)
scrub: 2,    // Slower, more cinematic
```

### 2. Enable Debug Markers

See visual markers for scroll positions:

```typescript
markers: true  // Shows start/end markers in viewport
```

### 3. Add More Camera Positions

Extend the timeline with additional positions:

```typescript
.addLabel('about', 0.33)  // Add at 33% scroll progress
.to({}, {
  duration: 0.25,
  onUpdate: function() {
    // Interpolate to new position
  }
})
```

### 4. Custom Easing

Add easing to the timeline:

```typescript
.to({}, {
  duration: 0.5,
  ease: 'power2.inOut',  // Add custom easing
  onUpdate: function() {
    // ...
  }
})
```

## Integration Example

### Full-Page Scroll Experience

```tsx
function HomePage() {
  return (
    <div className="relative">
      {/* Fixed Background with 3D Scene */}
      <div className="fixed inset-0 w-full h-screen -z-10">
        <OrbitalCameraScene className="w-full h-full" />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        <section className="min-h-screen">
          <h1>Home - Camera: Initial View</h1>
        </section>
        
        <section className="min-h-screen">
          <h1>Services - Camera: Orbital Position 1</h1>
        </section>
        
        <section className="min-h-screen">
          <h1>Contact - Camera: Orbital Position 2</h1>
        </section>
      </div>
    </div>
  )
}
```

## Troubleshooting

### Camera Not Found
If you see "Camera not found in Spline scene":
1. Check that your Spline scene has a camera named 'Camera'
2. Or update the camera name in `findObjectByName('YourCameraName')`

### Animation Not Working
1. Ensure your page has enough content to scroll (multiple sections)
2. Check browser console for GSAP or Spline errors
3. Enable `markers: true` to debug ScrollTrigger

### Performance Issues
1. Reduce `scrub` value (e.g., `scrub: 0.5`)
2. Simplify Spline scene geometry
3. Ensure GPU acceleration is enabled in browser

## Technical Details

- **React**: Uses `useRef` for Spline instance storage
- **GSAP**: Uses ScrollTrigger plugin for scroll-based animation
- **Spline**: Uses `@splinetool/react-spline` v4.1.0
- **TypeScript**: Fully typed with proper interfaces
- **Cleanup**: Automatically kills timeline on unmount

## Browser Support

- Chrome: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support

## License

This component is part of the ProfitWise Accountancy project.
