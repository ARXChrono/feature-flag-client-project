import React from 'react'
import { MedicationDetails } from '../components/medication-details'
import { PageLayout } from '../components/page-layout'
import { useMedication, useUser, useVariationFlags } from '../mock-data'

export const DashboardScreen = () => {
  const user = useUser()
  const medication = useMedication()
  const variationFlags = useVariationFlags()

  const { profileSectionFlag, detailsCtaFlag } = variationFlags

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
