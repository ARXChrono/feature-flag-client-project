import React, { useState, useEffect } from 'react'
import { MedicationDetails } from '../components/medication-details'
import { PageLayout } from '../components/page-layout'
import { useMedication, useUser } from '../mock-data'
import {
  launchBannerFlagKey,
  profileSectionFlagKey,
  detailsCtaFlagKey,
} from '../feature-flag-config'
import * as LDClient from 'launchdarkly-js-client-sdk'

const apiKey: string = `${process.env.REACT_APP_LAUNCH_DARKLY_CLIENT_ID}`

export const DashboardScreen = () => {
  const user = useUser()
  const medication = useMedication()
  const [flags, setFlags] = useState({})
  const options: LDClient.LDOptions = { bootstrap: 'localStorage' }
  const client = LDClient.initialize(apiKey, user, options)

  useEffect(() => {
    client
      .waitForInitialization()
      .then(() => {
        // initialization succeeded, flag values are now available
        setFlags({
          launchBannerFlag: client.variation(launchBannerFlagKey, false),
          profileSectionFlag: client.variation(profileSectionFlagKey, false),
          detailsCtaFlag: client.variation(detailsCtaFlagKey, false),
        })
      })
      .catch((err) => {
        // initialization failed
        console.log(err)
      })
  })

  console.log(flags)
  return (
    <PageLayout className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-details">
        <h3>Your information</h3>
        <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Country: {user.country}</li>
        </ul>
      </div>
      <div className="dashboard-details">
        <h3>Your medication</h3>
        <ul>
          <li>Medication: {medication.name}</li>
          <li>Repeats left: {medication.repeatsLeft}</li>
          <li>Instructions: {medication.instructions}</li>
        </ul>
        <MedicationDetails />
      </div>
    </PageLayout>
  )
}
