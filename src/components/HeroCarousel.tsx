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
    <section className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] z-0 bg-transparent">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide
        const isFirstSlide = index === 0
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
            className={`absolute inset-0 transition-opacity duration-500 sm:duration-1000 ${
              isActive ? 'opacity-100 z-50' : 'opacity-0 z-0 pointer-events-none'
            } ${slide.onClickLink && isActive ? 'cursor-pointer' : ''} ${
              isFirstSlide ? 'bg-cover' : 'bg-contain sm:bg-cover'
            } ${!isFirstSlide ? 'carousel-image-center-mobile' : ''}`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundPosition: isFirstSlide ? 'center' : 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          {/* Overlay for better text readability */}
          {slide.showOverlay !== false && (
            <div className="absolute inset-0 bg-black/40"></div>
          )}
          
          {/* Content */}
          <div className="relative z-20 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center pt-4 pb-8 sm:pt-8 sm:pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-24 px-4">
            {slide.content}
          </div>
        </div>
        )
      })}

      {/* Navigation Arrows - Hidden */}
      {false && slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm rounded-full p-1.5 sm:p-2 transition-all touch-manipulation"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm rounded-full p-1.5 sm:p-2 transition-all touch-manipulation"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator - Hidden */}
      {false && slides.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all touch-manipulation ${
                index === currentSlide
                  ? 'w-6 sm:w-8 bg-white'
                  : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/75 active:bg-white/90'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

