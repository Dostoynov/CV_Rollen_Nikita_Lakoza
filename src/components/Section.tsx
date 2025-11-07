import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  icon?: string
  children: ReactNode
}

export const Section = ({ id, title, icon, children }: SectionProps) => {
  const headingId = `${id}-title`

  return (
    <section className="content-section" id={id} aria-labelledby={headingId} data-section={id}>
      <div className="content-section__header">
        {icon ? (
          <span className="content-section__icon material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
        <h2 className="section-title" id={headingId}>
          {title}
        </h2>
      </div>
      <div className="content-section__body">{children}</div>
    </section>
  )
}
