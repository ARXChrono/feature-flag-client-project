import React from 'react'
import { render } from '@testing-library/react'
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
})
