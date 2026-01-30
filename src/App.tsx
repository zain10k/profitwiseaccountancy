import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@/components/Layout'
import { useEffect, lazy, Suspense } from 'react'

// Lazy load all route components for code splitting
const Home = lazy(() => import('@/pages/Home').then(module => ({ default: module.Home })))
const About = lazy(() => import('@/pages/About').then(module => ({ default: module.About })))
const Services = lazy(() => import('@/pages/Services').then(module => ({ default: module.Services })))
const Contact = lazy(() => import('@/pages/Contact').then(module => ({ default: module.Contact })))
const Partners = lazy(() => import('@/pages/Partners').then(module => ({ default: module.Partners })))
const NotFound = lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, 
    },
  },
})

function ScrollToTop() {
  const { pathname } = useLocation()

  // Prevent browser from restoring scroll on refresh or back/forward
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  // Scroll to top on every route change and on initial load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      <div className="text-slate-600 text-sm tracking-widest uppercase animate-pulse">
        Loading
      </div>
    </div>
  </div>
)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
