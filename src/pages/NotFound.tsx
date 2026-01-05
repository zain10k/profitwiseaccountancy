import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <div className="bg-transparent min-h-screen flex items-center justify-center py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h2>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center rounded-md border-2 border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


