import { Home, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <Container className="relative z-10 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button to="/" variant="primary" size="lg" className="inline-flex items-center gap-2">
              <Home className="h-5 w-5" />
              Go Home
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
