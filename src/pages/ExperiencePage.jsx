import React from 'react'

export default function ExperiencePage({ experiences, onBack }) {
  return (
    <div className="page-view">
      <section className="page-hero">
        <div className="section-inner page-hero-inner">
          <p className="eyebrow">Experience</p>
          <h1>Experience Overview</h1>
          <p className="page-lead">
            A focused page for roles, project practice, and the kinds of frontend work you have actually been building.
          </p>
          <div className="page-actions">
            <button type="button" className="button primary" onClick={onBack}>
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner">
          <div className="page-list">
            {experiences.map((entry) => (
              <article className="page-card" key={entry.title}>
                <p className="page-card-kicker">{entry.period}</p>
                <h2>{entry.title}</h2>
                <p>{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
