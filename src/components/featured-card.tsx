import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const StyledFeaturedCard = styled.div`
  ${tw`w-full bg-white rounded-md shadow-sm overflow-hidden flex flex-col md:flex-row`}
`

const FeatureImageWrapper = styled.div`
  ${tw`w-full md:w-5/12`}
`

const FeatureImage = styled.img`
  ${tw`h-36 md:h-full object-cover`}
`

const FeaturedContentWrapper = styled.div`
  ${tw`w-full md:w-7/12 p-8 md:p-16`}
`

const FeaturedCard = ({ children, imageSrc, imageAlt }) => {
  return (
    <StyledFeaturedCard>
      <FeatureImageWrapper>
        <FeatureImage
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
        ></FeatureImage>
      </FeatureImageWrapper>
      <FeaturedContentWrapper>{children}</FeaturedContentWrapper>
    </StyledFeaturedCard>
  )
}

export default FeaturedCard
