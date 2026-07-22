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

    <div className="experience-timeline">

      {experiences.map((entry, index) => (
        <div className="timeline-item" key={index}>

          <div className="timeline-left">

          <div className="timeline-icon">
            <img src="public/assets/images/icons/sbmalogo.png" alt="SBMA" />
          </div>

            {index !== experiences.length - 1 && (
              <div className="timeline-line"></div>
            )}

          </div>

          <div className="timeline-right">

            <div className="experience-card">

              <div className="experience-header">

                <div>

                  <span className="experience-type">
                    {entry.type}
                  </span>
                  <h2>{entry.company}</h2>
                  <h3>{entry.role}</h3>

                  <p className="experience-location">
                    {entry.organization}
                  </p>

                  <p className="experience-location">
                    {entry.location}
                  </p>

                </div>

                <span className="experience-date">
                  {entry.period}
                </span>

              </div>

              <p className="experience-description">
                {entry.description}
              </p>

              <li className="experience-highlights">
                {entry.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </li>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
      </section>
    </div>
  )
}
