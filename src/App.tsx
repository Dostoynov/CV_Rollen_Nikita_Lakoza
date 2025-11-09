import { useEffect, useState } from 'react'
import './App.css'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { Section } from './components/Section'
import { PortfolioCarousel } from './components/PortfolioCarousel'
import { useI18n } from './i18n'

function App() {
  const { translation } = useI18n()
  const { cv, layout } = translation
  const { metadata, contact, summary, experience, events, education, skills, tools, portfolio, logos, footer } = cv

  const [showBackToTop, setShowBackToTop] = useState(false)

  const handleBackToTop = () => {
    if (typeof window === 'undefined') {
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 280)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const backToTopClassName = [
    'site-footer__back-to-top',
    'site-footer__action',
    'back-to-top-button',
    showBackToTop ? 'back-to-top-button--visible' : undefined,
  ]
    .filter((className): className is string => Boolean(className))
    .join(' ')

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        {layout.skipToMain}
      </a>
      <div className="app__inner">
        <header className="page-header" aria-labelledby="cv-title">
          <div className="page-header__bar" role="presentation">
            <div className="page-header__spacer" aria-hidden="true" />
            <div className="page-header__actions" role="group" aria-label={layout.headerControlsLabel}>
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>

          <div className="page-hero">
            <div className="page-hero__profile">
              <figure className="page-hero__media">
                <img
                  src="/profile.jpg"
                  alt={metadata.name}
                />
              </figure>
              <div className="page-hero__intro">
                <span className="page-hero__eyebrow">{metadata.headline}</span>
                <h1 className="page-hero__title" id="cv-title">
                  {metadata.name}
                </h1>
                <ul className="page-hero__details" aria-label={metadata.detailsLabel}>
                  {metadata.details.map((detail) => (
                    <li key={detail.label}>
                      <span className="page-hero__details-label">{detail.label}</span>
                      <span>{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="page-hero__contacts" aria-labelledby="contact-title">
              <h2 className="section-title" id="contact-title">
                {contact.title}
              </h2>
              <ul className="contact-list">
                {contact.items.map((item) => {
                  const isEmail = item.href.startsWith('mailto:')
                  const linkText = item.value ?? item.label

                  return (
                    <li key={item.label} className="contact-list__item">
                      <span className="contact-list__icon material-symbols-rounded" aria-hidden="true">
                        {item.icon}
                      </span>
                      <div className="contact-list__content">
                        <span className="contact-list__label">{item.label}</span>
                        <a
                          className="contact-list__link"
                          href={item.href}
                          target={isEmail ? undefined : '_blank'}
                          rel={isEmail ? undefined : 'noopener noreferrer'}
                        >
                          {linkText}
                        </a>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </aside>
          </div>
        </header>

        {summary.tldr ? (
          <section className="tldr" aria-labelledby="tldr-title">
            <div className="tldr__inner">
              <header className="tldr__header">
                <span className="tldr__icon material-symbols-rounded" aria-hidden="true">
                  bolt
                </span>
                <h2 className="tldr__title" id="tldr-title">
                  {summary.tldr.title}
                </h2>
              </header>
              <ul className="tldr__list">
                {summary.tldr.items.map((item) => (
                  <li key={item.title} className="tldr__item">
                    <h3 className="tldr__item-title">{item.title}</h3>
                    <p className="tldr__item-copy">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <main className="page-content" id="main-content">
          <Section id="summary" title={summary.title} icon="auto_stories">
            <div className="summary-layout">
              <div className="summary-layout__intro-block">
                <p className="summary-layout__intro">{summary.description}</p>
                {summary.note ? <p className="section-note">{summary.note}</p> : null}
              </div>
              {summary.about ? (
                <article className="summary-about" aria-labelledby="summary-about-title">
                  <header className="summary-about__header">
                    <span className="summary-about__icon" aria-hidden="true">
                      ★
                    </span>
                    <h3 className="summary-about__title" id="summary-about-title">
                      {summary.about.title}
                    </h3>
                  </header>
                  <div className="summary-about__body">
                    {summary.about.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {summary.about.list && summary.about.list.length > 0 ? (
                    <div className="summary-about__list">
                      {summary.about.listTitle ? (
                        <h4 className="summary-about__list-title">{summary.about.listTitle}</h4>
                      ) : null}
                      <ul className="checklist">
                        {summary.about.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <p className="summary-about__highlight">{summary.about.highlight}</p>
                  {summary.about.note ? <p className="summary-about__note">{summary.about.note}</p> : null}
                </article>
              ) : null}
            </div>
          </Section>
          <Section id="experience" title={experience.title} icon="work">
            <div className="experience-list">
              {experience.items.map((item) => (
                <article key={`${item.company}-${item.role}`} className="experience-card">
                  <header className="experience-card__header">
                    <p className="experience-card__company">{item.company}</p>
                    <h3 className="experience-card__title">{item.role}</h3>
                    <p className="experience-card__meta">
                      <span>{item.period}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{item.location}</span>
                    </p>
                  </header>
                  <p className="experience-card__description">{item.description}</p>
                  <ul className="experience-card__achievements">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>
                        <span className="experience-card__marker material-symbols-rounded" aria-hidden="true">
                          verified
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>
          {portfolio ? (
            <Section id="portfolio" title={portfolio.title} icon="view_carousel">
              <PortfolioCarousel items={portfolio.items} toggle={portfolio.toggle} />
            </Section>
          ) : null}
          {events ? (
            <Section id="events" title={events.title} icon="emoji_events">
              {events.intro ? <p className="section-intro">{events.intro}</p> : null}
              {events.items ? (
                <div className="event-grid">
                  {events.items.map((event) => (
                    <article key={`${event.title}-${event.period}`} className="event-card">
                      <header className="event-card__header">
                        <p className="event-card__title">{event.title}</p>
                        <p className="event-card__meta">
                          <span>{event.role}</span>
                          <span aria-hidden="true"> · </span>
                          <span>{event.period}</span>
                        </p>
                        <p className="event-card__location">{event.location}</p>
                      </header>
                      <p className="event-card__description">{event.description}</p>
                      {event.link ? (
                        <a
                          className="event-card__link"
                          href={event.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{event.link.label}</span>
                          <span className="material-symbols-rounded" aria-hidden="true">
                            north_east
                          </span>
                        </a>
                      ) : null}
                    </article>
                  ))}
                </div>
              ) : null}
              {events.categories ? (
                <div className="tournament-grid">
                  {events.categories.map((category) => (
                    <section key={category.title} className="tournament-card" aria-label={category.title}>
                      <h3 className="section-subtitle">{category.title}</h3>
                      <ul className="tournament-list">
                        {category.tournaments.map((tournament) => {
                          const [primaryLink, ...extraLinks] = tournament.links

                          if (!primaryLink) {
                            return null
                          }

                          return (
                            <li key={tournament.name} className="tournament-list__item">
                              <a
                                className="tournament-link"
                                href={primaryLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="tournament-link__name">{tournament.name}</span>
                                <span className="tournament-link__arrow material-symbols-rounded" aria-hidden="true">
                                  north_east
                                </span>
                              </a>
                              {extraLinks.length ? (
                                <div className="tournament-extras" aria-label={`${tournament.name} additional links`}>
                                  {extraLinks.map((link) => (
                                    <a
                                      key={`${tournament.name}-${link.href}`}
                                      className="tournament-extra-link"
                                      href={link.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <span>{link.label ?? 'More info'}</span>
                                      <span className="material-symbols-rounded" aria-hidden="true">
                                        north_east
                                      </span>
                                    </a>
                                  ))}
                                </div>
                              ) : null}
                            </li>
                          )
                        })}
                      </ul>
                    </section>
                  ))}
                </div>
              ) : null}
            </Section>
          ) : null}
          <Section id="education" title={education.title} icon="school">
            <ul className="education-list">
              {education.items.map((item) => (
                <li key={`${item.institution}-${item.period}`} className="education-list__item">
                  <div className="education-list__heading">
                    <h3 className="education-list__degree">{item.degree}</h3>
                    <p className="education-list__institution">{item.institution}</p>
                  </div>
                  <p className="education-list__meta">
                    <span>{item.period}</span>
                    <span aria-hidden="true"> · </span>
                    <span>{item.location}</span>
                  </p>
                  {item.description ? (
                    <p className="education-list__description">{item.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Section>
          <Section id="skills" title={skills.title} icon="psychology">
            {skills.note ? (
              <figure className="skills-lead">
                <span className="skills-lead__icon material-symbols-rounded" aria-hidden="true">
                  format_quote
                </span>
                <blockquote className="skills-lead__text">{skills.note}</blockquote>
              </figure>
            ) : null}
            <div className="skills-grid">
              {skills.groups.map((group) => (
                <section key={group.title} aria-label={group.title} className="skills-grid__group">
                  <h3 className="skills-grid__title">{group.title}</h3>
                  <ul className="skills-grid__list">
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </Section>
          {tools ? (
            <Section id="tools" title={tools.title} icon="build">
              <div className="skills-grid">
                {tools.groups.map((group) => (
                  <section key={group.title} aria-label={group.title} className="skills-grid__group">
                    <h3 className="skills-grid__title">{group.title}</h3>
                    <ul className="skills-grid__list skills-grid__list--tools">
                      {group.items.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </Section>
          ) : null}
          {logos ? (
            <Section id="logos" title={logos.title} icon="diversity_2">
              <ul className="logo-grid">
                {logos.items.map((logo) => (
                  <li key={logo.href} className="logo-grid__item">
                    <a
                      className="logo-grid__link"
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="logo-grid__image" src={logo.src} alt={logo.alt} />
                    </a>
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}
        </main>

        <footer className="site-footer">
          <p>{footer.note}</p>
          <div className="site-footer__actions">
            {footer.pdfLink && (
              <a
                className="site-footer__pdf-link site-footer__action"
                href={footer.pdfLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded" aria-hidden="true">
                  picture_as_pdf
                </span>
                <span>{footer.pdfLink.label}</span>
              </a>
            )}
            <button
              type="button"
              className={backToTopClassName}
              onClick={handleBackToTop}
              aria-hidden={!showBackToTop}
              tabIndex={showBackToTop ? 0 : -1}
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                north
              </span>
              <span>{layout.backToTop}</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
