import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const StyledButton = styled.button`
  ${tw`bg-gray-700 mt-4 ml-auto w-full md:w-auto text-white focus:outline-none focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}

  /* Use Variation Color if available and set */
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`

// Problem:
//     This should be coloured based on FF value
// Feature flag name:
//     details-section-cta-colour
// Setup:
//     Fill background color with flag value.
export const RequestReviewButton = ({ detailsCtaFlag }) => {
  return (
    <StyledButton color={detailsCtaFlag} className="cta-request-review-button">
      Request doctor review
    </StyledButton>
  )
}
