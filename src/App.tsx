import './App.css'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { Section } from './components/Section'
import { useI18n } from './i18n'

function App() {
  const { translation } = useI18n()
  const { cv, layout } = translation

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
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=320&q=80"
                  alt={cv.metadata.name}
                />
              </figure>
              <div className="page-hero__intro">
                <span className="page-hero__eyebrow">{cv.metadata.headline}</span>
                <h1 className="page-hero__title" id="cv-title">
                  {cv.metadata.name}
                </h1>
                <ul className="page-hero__details" aria-label={cv.metadata.detailsLabel}>
                  {cv.metadata.details.map((detail) => (
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
                {cv.contact.title}
              </h2>
              <ul className="contact-list">
                {cv.contact.items.map((item) => (
                  <li key={item.label} className="contact-list__item">
                    <span className="contact-list__icon material-symbols-rounded" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div className="contact-list__content">
                      <span className="contact-list__label">{item.label}</span>
                      <a
                        className="contact-list__link"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </header>

        <main className="page-content" id="main-content">
          <Section id="summary" title={cv.summary.title} icon="auto_stories">
            <p>{cv.summary.description}</p>
          </Section>
          <Section id="experience" title={cv.experience.title} icon="work">
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
          <Section id="education" title={cv.education.title} icon="school">
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
          <Section id="skills" title={cv.skills.title} icon="psychology">
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

        <footer className="site-footer">
          <p>{cv.footer.note}</p>
          {cv.footer.pdfLink && (
            <a
              className="site-footer__pdf-link"
              href={cv.footer.pdfLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                picture_as_pdf
              </span>
              <span>{cv.footer.pdfLink.label}</span>
            </a>
          )}
        </footer>
      </div>
    </div>
  )
}

export default App
