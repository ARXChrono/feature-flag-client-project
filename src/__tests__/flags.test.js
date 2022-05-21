import React from 'react'
import { render } from '@testing-library/react'
import { toHaveStyle } from '@testing-library/jest-dom'
import { DashboardScreen } from '../pages/dashboard'
import { LoginScreen } from '../pages/login'

describe('Login', () => {
  it('renders the component', () => {
    render(<LoginScreen />)
  })

  it('displays promobanner correctly', () => {
    const { container } = render(<LoginScreen />)
    const PromoBanner = container.querySelector('.promotional-banner')
    expect(PromoBanner.textContent).toBe('50% launch sale! Use code TAKEHOME')
  })
})

describe('Dashboard', () => {
  it('renders the component', () => {
    render(<DashboardScreen />)
  })

  it('displays promobanner correctly', () => {
    const { container } = render(<DashboardScreen />)
    const PromoBanner = container.querySelector('.promotional-banner')
    expect(PromoBanner.textContent).toBe('50% launch sale! Use code TAKEHOME')
  })

  it('displays cta button color correctly', () => {
    const { container } = render(<DashboardScreen />)
    const ctaButton = container.querySelector('.cta-request-review-button')
    expect(ctaButton).toHaveStyle(`background-color: #BADA55`)
  })

  it('displays enrolled profile details correctly', () => {
    const { container } = render(<DashboardScreen />)
    const enrolledDetails = container.querySelector(
      '.enrolled-medication-details'
    )
    expect(enrolledDetails).toBeTruthy()
  })
})
