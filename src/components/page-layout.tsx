import React from 'react'
import GlobalStyle from '../assets/globalstyle'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useUser, useVariationFlags } from '../mock-data'

const AppWrapper = styled.main`
  ${tw`md:p-4`}
  margin: 0 auto;
  max-width: 960px;
`

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
  const user = useUser()
  const flags = useVariationFlags()
  const { launchBannerFlag } = flags

  // tracking event
  const event = {
    user: user.name,
    uuid: user.uuid,
    variationFlags: flags,
  }
  console.log('🔥', event)

  return (
    <AppWrapper className={`page-layout ${className}`}>
      <GlobalStyle />
      {launchBannerFlag && <PromotionalBanner />}
      {children}
    </AppWrapper>
  )
}
