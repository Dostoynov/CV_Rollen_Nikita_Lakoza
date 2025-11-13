import { useEffect, useId, useState } from 'react'

type PortfolioMediaType = 'image' | 'video' | 'iframe'

type PortfolioFallback = {
  mediaType: 'iframe'
  src: string
  allow?: string
  allowFullScreen?: boolean
}

type PortfolioItem = {
  title: string
  description: string
  mediaType: PortfolioMediaType
  src: string
  poster?: string
  alt?: string
  orientation?: 'landscape' | 'portrait'
  allow?: string
  allowFullScreen?: boolean
  sourceType?: string
  fallback?: PortfolioFallback
}

interface PortfolioCarouselProps {
  items: Array<Omit<PortfolioItem, 'mediaType'> & { mediaType: string }>
  toggle?: {
    expand: string
    collapse: string
  }
}

export const PortfolioCarousel = ({ items, toggle }: PortfolioCarouselProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [videoFallbacks, setVideoFallbacks] = useState<Record<string, boolean>>({})
  const trackId = useId()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia('(max-width: 640px)')

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    setIsMobile(mediaQuery.matches)

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setIsExpanded(false)
    }
  }, [isMobile])

  const rootClasses = ['portfolio-carousel']

  const normalizedItems: PortfolioItem[] = items.map((item) => ({
    ...item,
    mediaType: item.mediaType === 'video' || item.mediaType === 'iframe' ? item.mediaType : 'image',
  }))

  const isExpandable = normalizedItems.length > 1

  if (isMobile && isExpandable && !isExpanded) {
    rootClasses.push('portfolio-carousel--collapsed')
  }

  if (isMobile && isExpandable && isExpanded) {
    rootClasses.push('portfolio-carousel--expanded')
  }

  const canToggle = isMobile && toggle && isExpandable

  return (
    <div className={rootClasses.join(' ')}>
      <div className="portfolio-carousel__viewport">
        <ul className="portfolio-carousel__track" id={trackId}>
          {normalizedItems.map((item) => {
            const isMotionMedia = item.mediaType === 'video' || item.mediaType === 'iframe'
            const shouldUseFallback =
              item.mediaType === 'video' && videoFallbacks[item.title] && item.fallback?.mediaType === 'iframe'
            const itemClasses = ['portfolio-carousel__item']
            const cardClasses = ['portfolio-card']
            const overlayClasses = ['portfolio-card__overlay']

            if (item.orientation === 'portrait') {
              itemClasses.push('portfolio-carousel__item--portrait')
              cardClasses.push('portfolio-card--portrait')
            }

            if (isMotionMedia) {
              itemClasses.push('portfolio-carousel__item--motion')
              cardClasses.push('portfolio-card--motion')
              overlayClasses.push('portfolio-card__overlay--static')
            } else {
              cardClasses.push('portfolio-card--image')
            }

            return (
              <li key={item.title} className={itemClasses.join(' ')}>
                <article className={cardClasses.join(' ')}>
                  <figure className="portfolio-card__media">
                    {item.mediaType === 'video' && shouldUseFallback && item.fallback ? (
                      <div className="portfolio-card__embed-wrapper">
                        <iframe
                          className="portfolio-card__iframe"
                          src={item.fallback.src}
                          title={item.title}
                          allow={item.fallback.allow}
                          allowFullScreen={item.fallback.allowFullScreen}
                          loading="lazy"
                        />
                      </div>
                    ) : item.mediaType === 'video' ? (
                      <video
                        className="portfolio-card__video"
                        controls
                        preload="metadata"
                        playsInline
                        controlsList="nodownload"
                        poster={item.poster}
                        onError={() =>
                          setVideoFallbacks((previous) => ({
                            ...previous,
                            [item.title]: true,
                          }))
                        }
                      >
                        <source src={item.src} type={item.sourceType} />
                      </video>
                    ) : item.mediaType === 'iframe' ? (
                      <div className="portfolio-card__embed-wrapper">
                        <iframe
                          className="portfolio-card__iframe"
                          src={item.src}
                          title={item.title}
                          allow={item.allow}
                          allowFullScreen={item.allowFullScreen}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <>
                        <div
                          className="portfolio-card__image-backdrop"
                          aria-hidden="true"
                          style={{ backgroundImage: `url(${item.src})` }}
                        />
                        <img
                          className="portfolio-card__image"
                          src={item.src}
                          alt={item.alt ?? item.title}
                        />
                      </>
                    )}
                    <figcaption className={overlayClasses.join(' ')}>
                      <h3 className="portfolio-card__title">{item.title}</h3>
                      <p className="portfolio-card__description">{item.description}</p>
                    </figcaption>
                  </figure>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {canToggle ? (
        <button
          type="button"
          className="portfolio-carousel__toggle"
          aria-expanded={isExpanded}
          aria-controls={trackId}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <span className="portfolio-carousel__toggle-label">
            {isExpanded ? toggle.collapse : toggle.expand}
          </span>
          <span className="portfolio-carousel__toggle-icon material-symbols-rounded" aria-hidden="true">
            expand_more
          </span>
        </button>
      ) : null}
    </div>
  )
}
