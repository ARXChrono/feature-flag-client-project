import { useState, useEffect } from 'react'

const useVariationFlags = () => {
  const [flags, setFlags] = useState({
    // Defaults
    launchBannerFlagKey: false,
    profileSectionFlag: false,
    detailsCtaFlag: false,
  })

  useEffect(() => {
    // Manually Set Keys below
    setFlags({
      launchBannerFlagKey: false, // Set to true to show Promo Banner
      profileSectionFlag: false,
      detailsCtaFlag: false,
    })
  }, [])

  return flags
}

export default useVariationFlags
