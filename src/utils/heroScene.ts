// The 3D Spline scene shown in the home page hero on laptop-sized screens and up.
export const HERO_SCENE_URL =
  'https://prod.spline.design/inTyBAsCyiY4aWGe/scene.splinecode?v=3'

// Screens at least this wide get the 3D scene; smaller ones get the photo.
export const HERO_SCENE_MEDIA = '(min-width: 1024px)'

/**
 * Start downloading the 3D hero as early as possible, in parallel with the rest
 * of the app, instead of waiting for the home page code to load first.
 * Only runs on the home page on laptop+ screens, so phones and other pages
 * never download it.
 */
export function preloadHeroScene() {
  if (typeof window === 'undefined') return
  if (window.location.pathname !== '/') return
  if (!window.matchMedia(HERO_SCENE_MEDIA).matches) return

  // Spline's ~2 MB runtime (the same chunk HeroModern lazy-loads)
  void import('@splinetool/react-spline').catch(() => {})

  // The scene file; Spline's own fetch of this URL reuses the preloaded copy
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'fetch'
  link.crossOrigin = 'anonymous'
  link.href = HERO_SCENE_URL
  document.head.appendChild(link)
}
