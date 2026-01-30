// Centralized GSAP plugin registration
// Import this file instead of registering plugins in multiple components
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins once
gsap.registerPlugin(ScrollTrigger)

// Export for use in components
export { gsap, ScrollTrigger }
