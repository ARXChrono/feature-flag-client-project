import React, { useState, useEffect } from 'react'
import GlobalStyle from '../assets/globalstyle'
import tw from 'twin.macro'
import styled from 'styled-components'

import * as LDClient from 'launchdarkly-js-client-sdk'
import {
  launchBannerFlagKey,
  profileSectionFlagKey,
  detailsCtaFlagKey,
} from '../feature-flag-config'
const apiKey = `${process.env.REACT_APP_LAUNCH_DARKLY_CLIENT_ID}`
const user = {
  key: 'anything',
  name: 'John Doe',
}
const client = LDClient.initialize(apiKey, user)

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
  const [flags, setFlags] = useState({
    //Defaults
    launchBannerFlag: false,
    profileSectionFlag: '',
    detailsCtaFlag: '',
  })

  useEffect(() => {
    client
      .waitForInitialization()
      .then(() => {
        setFlags({
          launchBannerFlag: client.variation(
            launchBannerFlagKey,
            false
          ) as boolean,
          profileSectionFlag: client.variation(
            profileSectionFlagKey,
            false
          ) as string,
          detailsCtaFlag: client.variation(detailsCtaFlagKey, false) as string,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const { launchBannerFlag } = flags
  return (
    <AppWrapper className={`page-layout ${className}`}>
      <GlobalStyle />
      {launchBannerFlag && <PromotionalBanner />}
      {children}
    </AppWrapper>
  )
}
