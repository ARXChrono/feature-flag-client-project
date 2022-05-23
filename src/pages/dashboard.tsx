import React, { useState, useEffect } from 'react'
import { MedicationDetails } from '../components/medication-details'
import { PageLayout } from '../components/page-layout'
import { useMedication, useUser } from '../mock-data'

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

export const DashboardScreen = () => {
  const user = useUser()
  const medication = useMedication()
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
  const { profileSectionFlag, detailsCtaFlag } = flags

  return (
    <PageLayout className="dashboard">
      <h1 className="text-2xl">Dashboard</h1>
      <div className="dashboard-details">
        <h3 className="text-lg mt-2 mb-2">Your information</h3>
        <ul className="text-sm">
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Country: {user.country}</li>
        </ul>
      </div>
      <div className="dashboard-details">
        <h3 className="text-lg mt-2 mb-2">Your medication</h3>
        <ul className="text-sm">
          <li>Medication: {medication.name}</li>
          <li>Repeats left: {medication.repeatsLeft}</li>
          <li>Instructions: {medication.instructions}</li>
        </ul>
        {profileSectionFlag === 'variation' && (
          <MedicationDetails detailsCtaFlag={detailsCtaFlag} />
        )}
      </div>
    </PageLayout>
  )
}
