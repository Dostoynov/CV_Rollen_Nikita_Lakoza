import './App.css'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { Section } from './components/Section'
import { useI18n } from './i18n'
import { usePdfExport } from './features/pdfExport/usePdfExport'

function App() {
  const { translation } = useI18n()
  const { exportToPdf, pdfUrl, isReady } = usePdfExport()

  const { cv, actions, layout } = translation

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        {layout.skipToMain}
      </a>
      <article className="cv" aria-labelledby="cv-title">
        <div className="cv__glow" aria-hidden="true" />
        <div className="cv__container">
          <div className="cv__toolbar">
            <LanguageSwitcher />
            <div className="pdf-actions" role="group" aria-label={layout.pdfControlsLabel}>
              <button
                type="button"
                className="pdf-actions__button"
                onClick={exportToPdf}
                disabled={!isReady}
              >
                {actions.exportPdf}
              </button>
              <a
                className="pdf-actions__link"
                href={pdfUrl ?? '#'}
                aria-disabled={pdfUrl ? undefined : 'true'}
              >
                {actions.viewPdf}
              </a>
              <p className="pdf-actions__hint" role="note">
                {actions.exportComingSoon}
              </p>
            </div>
          </div>

          <header className="cv-hero" aria-labelledby="cv-title">
            <div className="cv-hero__content">
              <span className="cv-hero__eyebrow">{cv.metadata.headline}</span>
              <h1 className="cv-hero__title" id="cv-title">
                {cv.metadata.name}
              </h1>
              <ul className="cv-hero__details" aria-label={cv.metadata.detailsLabel}>
                {cv.metadata.details.map((detail) => (
                  <li key={detail.label}>
                    <span className="cv-hero__details-label">{detail.label}</span>
                    <span>{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="cv-hero__panel" aria-labelledby="contact-title">
              <h2 className="cv-section__title" id="contact-title">
                {cv.contact.title}
              </h2>
              <ul className="cv-hero__contact-list">
                {cv.contact.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </header>

          <main className="cv__sections" id="main-content">
            <Section id="summary" title={cv.summary.title}>
              <p>{cv.summary.description}</p>
            </Section>
            <Section id="experience" title={cv.experience.title}>
              <div className="experience-list">
                {cv.experience.items.map((item) => (
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
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Section>
            <Section id="education" title={cv.education.title}>
              <ul className="education-list">
                {cv.education.items.map((item) => (
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
                  </li>
                ))}
              </ul>
            </Section>
            <Section id="skills" title={cv.skills.title}>
              <div className="skills-grid">
                {cv.skills.groups.map((group) => (
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
          </main>

          <footer className="cv__footer">
            <p>{cv.footer.note}</p>
          </footer>
        </div>
      </article>
    </div>
  )
}

export default App
