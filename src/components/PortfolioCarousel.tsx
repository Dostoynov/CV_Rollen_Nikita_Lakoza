import { useEffect, useId, useState } from 'react'

type PortfolioMediaType = 'image' | 'video'

type PortfolioItem = {
  title: string
  description: string
  mediaType: PortfolioMediaType
  src: string
  poster?: string
  alt?: string
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
    mediaType: item.mediaType === 'video' ? 'video' : 'image',
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
          {normalizedItems.map((item) => (
            <li key={item.title} className="portfolio-carousel__item">
              <article className="portfolio-card">
                <figure className="portfolio-card__media">
                  {item.mediaType === 'video' ? (
                    <video
                      className="portfolio-card__video"
                      controls
                      preload="metadata"
                      poster={item.poster}
                    >
                      <source src={item.src} />
                    </video>
                  ) : (
                    <img className="portfolio-card__image" src={item.src} alt={item.alt ?? item.title} />
                  )}
                  <figcaption className="portfolio-card__overlay">
                    <h3 className="portfolio-card__title">{item.title}</h3>
                    <p className="portfolio-card__description">{item.description}</p>
                  </figcaption>
                </figure>
              </article>
            </li>
          ))}
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
