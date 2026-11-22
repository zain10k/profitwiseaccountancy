import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from '../Layout'

describe('Layout', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </BrowserRouter>
    )

    // The brand is shown as a logo image (header and footer), linking home
    const logos = screen.getAllByRole('img', { name: 'ProfitWise Accountants' })
    expect(logos.length).toBeGreaterThan(0)
    expect(logos[0].closest('a')).toHaveAttribute('href', '/')

    // Nav links can appear in both the header and the footer
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThan(0)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})










