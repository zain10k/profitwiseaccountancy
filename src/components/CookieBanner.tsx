import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const STORAGE_KEY = 'cookie_consent'

type ConsentValue = 'all' | 'essential' | 'reject'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const handleChoice = (value: ConsentValue) => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore
    }
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[9990] bg-slate-900 border-t border-slate-700/50 shadow-2xl"
          role="dialog"
          aria-label="Cookie consent"
        >
          <Container className="py-4 sm:py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                We use cookies to improve your experience and analyse site traffic. By choosing
                &quot;Accept all&quot; you agree to our use of cookies. You can{' '}
                <Link
                  to="/cookies"
                  className="text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors"
                >
                  change your preferences
                </Link>{' '}
                anytime.
              </p>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleChoice('all')}
                  className="rounded-lg"
                >
                  Accept all
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleChoice('essential')}
                  className="rounded-lg border-slate-500 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  Essential only
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleChoice('reject')}
                  className="rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                >
                  Reject
                </Button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
