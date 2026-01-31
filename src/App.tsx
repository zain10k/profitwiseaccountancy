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
const Faq = lazy(() => import('@/pages/Faq').then(module => ({ default: module.Faq })))
const Privacy = lazy(() => import('@/pages/Privacy').then(module => ({ default: module.Privacy })))
const Terms = lazy(() => import('@/pages/Terms').then(module => ({ default: module.Terms })))
const Cookies = lazy(() => import('@/pages/Cookies').then(module => ({ default: module.Cookies })))

// Individual Service Pages
const Tax = lazy(() => import('@/pages/services/Tax').then(module => ({ default: module.Tax })))
const Bookkeeping = lazy(() => import('@/pages/services/Bookkeeping').then(module => ({ default: module.Bookkeeping })))
const VatInvestigation = lazy(() => import('@/pages/services/VatInvestigation').then(module => ({ default: module.VatInvestigation })))
const Payroll = lazy(() => import('@/pages/services/Payroll').then(module => ({ default: module.Payroll })))
const Management = lazy(() => import('@/pages/services/Management').then(module => ({ default: module.Management })))
const Advisory = lazy(() => import('@/pages/services/Advisory').then(module => ({ default: module.Advisory })))
const Formation = lazy(() => import('@/pages/services/Formation').then(module => ({ default: module.Formation })))
const SelfAssessment = lazy(() => import('@/pages/services/SelfAssessment').then(module => ({ default: module.SelfAssessment })))
const WillsTrustProbate = lazy(() => import('@/pages/services/WillsTrustProbate').then(module => ({ default: module.WillsTrustProbate })))

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
              <Route path="/services/tax" element={<Tax />} />
              <Route path="/services/bookkeeping" element={<Bookkeeping />} />
              <Route path="/services/vat-investigation" element={<VatInvestigation />} />
              <Route path="/services/payroll" element={<Payroll />} />
              <Route path="/services/management" element={<Management />} />
              <Route path="/services/advisory" element={<Advisory />} />
              <Route path="/services/formation" element={<Formation />} />
              <Route path="/services/self-assessment" element={<SelfAssessment />} />
              <Route path="/services/wills-trust-probate" element={<WillsTrustProbate />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
