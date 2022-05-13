import React from 'react'
import GlobalStyle from '../assets/globalstyle'
import tw from 'twin.macro'

const AppWrapper = tw.main`bg-gray-100`

// Problem:
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name:
//     general-render-launch-banner
// Setup:
//     Show to users with flag value: true
const PromotionalBanner = () => (
  <div className="promotional-banner">
    <p>50% launch sale! Use code TAKEHOME</p>
  </div>
)

export const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  return (
    <AppWrapper className={`page-layout ${className}`}>
      <GlobalStyle />
      <PromotionalBanner />
      {children}
    </AppWrapper>
  )
}
