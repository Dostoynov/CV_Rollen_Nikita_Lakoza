import { useEffect, useState } from 'react'

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

  if (isMobile && !isExpanded) {
    rootClasses.push('portfolio-carousel--collapsed')
  }

  if (isMobile && isExpanded) {
    rootClasses.push('portfolio-carousel--expanded')
  }

  const normalizedItems: PortfolioItem[] = items.map((item) => ({
    ...item,
    mediaType: item.mediaType === 'video' ? 'video' : 'image',
  }))

  return (
    <div className={rootClasses.join(' ')}>
      {isMobile && toggle ? (
        <button
          type="button"
          className="portfolio-carousel__toggle"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? toggle.collapse : toggle.expand}
        </button>
      ) : null}
      <div className="portfolio-carousel__viewport">
        <ul className="portfolio-carousel__track">
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
    </div>
  )
}
