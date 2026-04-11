import { useEffect, useState } from 'react'
import { resolvePublicAssetPath } from '../../utils/assetPaths'

const DEFAULT_FALLBACK = resolvePublicAssetPath('/imgs/Logro1Bloq.png')

export function AchievementImage({ src, alt, fallbackSrc = DEFAULT_FALLBACK, className = '', ...rest }) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setCurrentSrc(src)
    setHasError(false)
    console.log('IMG:', src)
  }, [src])

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      console.log('IMG fallback:', fallbackSrc)
      setCurrentSrc(fallbackSrc)
      setHasError(true)
      return
    }

    setHasError(true)
  }

  return (
    <div className={`achievement-image-wrap ${className}`.trim()}>
      <img src={currentSrc} alt={alt} onError={handleError} {...rest} />
      {hasError && currentSrc === fallbackSrc && <span className="achievement-image-error">Asset unavailable</span>}
    </div>
  )
}
