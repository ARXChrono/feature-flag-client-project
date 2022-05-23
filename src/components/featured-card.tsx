import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const StyledFeaturedCard = styled.div`
  ${tw`w-full bg-white rounded-md md:shadow-sm overflow-hidden flex flex-col md:flex-row`}
  @media screen and (max-width: 768px) {
    min-height: 100vh;
    overflow: auto;
  }
`

const FeatureImageWrapper = styled.div`
  ${tw`w-full md:w-5/12`}
`

const FeatureImage = styled.img`
  ${tw`h-96 w-full md:h-full object-cover`}
`

const FeaturedContentWrapper = styled.div`
  ${tw`w-full md:w-7/12 p-8 md:p-16`}
`

const FeaturedCard = ({ children, imageSrc, imageAlt }) => {
  return (
    <StyledFeaturedCard>
      {imageSrc && (
        <FeatureImageWrapper>
          <FeatureImage src={imageSrc} alt={imageAlt} loading="lazy" />
        </FeatureImageWrapper>
      )}
      <FeaturedContentWrapper>{children}</FeaturedContentWrapper>
    </StyledFeaturedCard>
  )
}

export default FeaturedCard
