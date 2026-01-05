import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface CarouselSlide {
  id: string
  backgroundImage: string
  content: React.ReactNode
  showOverlay?: boolean
  onClickLink?: string
}

interface HeroCarouselProps {
  slides: CarouselSlide[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function HeroCarousel({ slides, autoPlay = true, autoPlayInterval = 5000 }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative overflow-hidden min-h-[90vh] z-0 bg-transparent">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide
        const handleClick = () => {
          if (slide.onClickLink && isActive) {
            const [path, hash] = slide.onClickLink.split('#')
            navigate(path)
            // Scroll to the section after navigation
            setTimeout(() => {
              if (hash) {
                const element = document.getElementById(hash)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }, 100)
          }
        }
        return (
          <div
            key={slide.id}
            onClick={handleClick}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? 'opacity-100 z-50' : 'opacity-0 z-0 pointer-events-none'
            } ${slide.onClickLink && isActive ? 'cursor-pointer' : ''}`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: index === 0 ? 'center' : 'center top',
              backgroundRepeat: 'no-repeat',
            }}
          >
          {/* Overlay for better text readability */}
          {slide.showOverlay !== false && (
            <div className="absolute inset-0 bg-black/40"></div>
          )}
          
          {/* Content */}
          <div className="relative z-20 min-h-[90vh] flex items-center justify-center pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
            {slide.content}
          </div>
        </div>
        )
      })}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

