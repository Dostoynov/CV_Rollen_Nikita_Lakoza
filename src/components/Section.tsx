import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export const Section = ({ id, title, children }: SectionProps) => {
  const headingId = `${id}-title`

  return (
    <section
      className="cv-section"
      id={id}
      aria-labelledby={headingId}
      data-section={id}
    >
      <div className="cv-section__header">
        <h2 className="cv-section__title" id={headingId}>
          {title}
        </h2>
      </div>
      <div className="cv-section__body">{children}</div>
    </section>
  )
}
