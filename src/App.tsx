import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Services } from '@/pages/Services'
import { Contact } from '@/pages/Contact'
import { Partners } from '@/pages/Partners'
import { NotFound } from '@/pages/NotFound'
import { Background3D } from '@/components/Background3D'
import { useEffect } from 'react'

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Background3D />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
