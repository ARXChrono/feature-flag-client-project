import React from 'react'
import { useMedication, useVariationFlags } from '../mock-data'
import { RequestReviewButton } from './request-review-button'

// Problem:
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name:
//     profile-render-details-section
// Setup:
//     Show to users with flag value 'variation'
export const MedicationDetails = () => {
  const medication = useMedication()
  const variationFlags = useVariationFlags()
  const { profileSectionFlag } = variationFlags
  if (profileSectionFlag === 'variation')
    return (
      <div>
        <ul className="text-sm mt-4">
          <li>Common side effects: {medication.sideEffects}</li>
          <li>Warning signs: {medication.warnings}</li>
        </ul>
        <p className="text-sm mt-6 font-semibold">
          Experiencing any of these? Please contact your doctor
        </p>
        <RequestReviewButton />
      </div>
    )
  else return null
}
