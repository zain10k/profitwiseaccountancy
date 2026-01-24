/**
 * EXAMPLE USAGE: OrbitalCameraScene Component
 * 
 * This example shows how to integrate the OrbitalCameraScene into your page.
 * The camera will smoothly orbit through three positions as the user scrolls.
 */

import { OrbitalCameraScene } from './OrbitalCameraScene'

export function ExamplePage() {
  return (
    <div className="relative">
      {/* Fixed Background with Orbital Camera */}
      <div className="fixed inset-0 w-full h-screen">
        <OrbitalCameraScene 
          sceneUrl="https://prod.spline.design/inTyBAsCyiY4aWGe/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Scrollable Content Sections */}
      <div className="relative z-10">
        {/* Section 1: Home */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-slate-900/50">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Home Section</h1>
            <p className="text-xl">Camera Position: Home View</p>
          </div>
        </section>

        {/* Section 2: Services */}
        <section className="min-h-screen flex items-center justify-center bg-slate-900/50">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Services Section</h1>
            <p className="text-xl">Camera Position: Services View (Orbital)</p>
          </div>
        </section>

        {/* Section 3: Contact */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900/50 to-slate-900">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Contact Section</h1>
            <p className="text-xl">Camera Position: Contact View (Orbital)</p>
          </div>
        </section>
      </div>
    </div>
  )
}

/**
 * CUSTOMIZATION OPTIONS:
 * 
 * 1. Adjust Camera Positions:
 *    Edit CAMERA_POSITIONS in OrbitalCameraScene.tsx
 * 
 * 2. Change Scrub Speed:
 *    Modify the `scrub: 1` value in ScrollTrigger config
 *    - Lower values = faster response
 *    - Higher values = smoother, more delayed response
 * 
 * 3. Debug Camera Positions:
 *    Set `markers: true` in ScrollTrigger config to see scroll markers
 * 
 * 4. Custom Spline Scene:
 *    Pass your own scene URL via the `sceneUrl` prop
 * 
 * 5. Timeline Markers:
 *    - 'home' label at 0% scroll progress
 *    - 'services' label at 50% scroll progress
 *    - 'contact' label at 100% scroll progress
 */
