import React, { useEffect, useState } from 'react'

const CERTIFICATE_ASSET_BASE = '/assets/documents/certifications'

const certificationSections = [
  {
    kicker: 'Programming',
    title: 'Programming Certificates',
    items: [
      {
        name: 'NDG Linux Essentials',
        issuer: 'CISCO / NetAcad',
        type: 'Course Completion',
        fileName: 'ndg-linux-essentials.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/ndg-linux-essentials.jpg`,
        tag: 'Systems / Linux',
      },
      {
        name: 'PCAP - Programming Essentials in Python',
        issuer: 'Python Institute',
        type: 'Course Completion',
        fileName: 'pcap-programming-essentials-in-python.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/pcap-programming-essentials-in-python.jpg`,
        tag: 'Python',
      },
      {
        name: 'JavaScript Essentials 1 (JSE)',
        issuer: 'CISCO / NetAcad',
        type: 'Course Completion',
        fileName: 'javascript-essentials-1.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/javascript-essentials-1.jpg`,
        tag: 'JavaScript',
      },
      {
        name: 'CPA - Programming Essentials in C++',
        issuer: 'CISCO / NetAcad',
        type: 'Course Completion',
        fileName: 'cpa-programming-essentials-in-cpp.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/cpa-programming-essentials-in-cpp.jpg`,
        tag: 'C++',
      },
      {
        name: 'CLP - Advanced Programming in C',
        issuer: 'CISCO / NetAcad',
        type: 'Course Completion',
        fileName: 'clp-advanced-programming-in-c.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/clp-advanced-programming-in-c.jpg`,
        tag: 'C',
      },
      {
        name: 'CLP - Programming Essentials in C',
        issuer: 'CISCO / NetAcad',
        type: 'Course Completion',
        fileName: 'cla-programming-essentials-in-c.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/cla-programming-essentials-in-c.jpg`,
        tag: 'C',
      },
    ],
  },
  {
    kicker: 'Training',
    title: 'Hands-On Training',
    items: [
      {
        name: '500hrs OJT + Hardware Troubleshooting Training',
        issuer: 'Training Completion',
        type: 'Certificate Training Completion',
        fileName: 'hardware-troubleshooting-training.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/hardware-troubleshooting-training.jpg`,
        tag: 'Hardware / Support',
      },
    ],
  },
  {
    kicker: 'TESDA',
    title: 'Computer Systems Servicing NC II',
    items: [
      {
        name: 'Installing and Configuring Computer Systems',
        issuer: 'TESDA',
        type: 'Module Certificate',
        fileName: 'css-installing-configuring.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/css-installing-configuring.jpg`,
        tag: 'CSS Module',
      },
      {
        name: 'Introduction to CSS',
        issuer: 'TESDA',
        type: 'Module Certificate',
        fileName: 'css-introduction.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/css-introduction.jpg`,
        tag: 'CSS Module',
      },
      {
        name: 'Maintaining Computer Systems and Networks',
        issuer: 'TESDA',
        type: 'Module Certificate',
        fileName: 'css-maintaining-networks.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/css-maintaining-networks.jpg`,
        tag: 'CSS Module',
      },
      {
        name: 'Setting Up Computer Networks',
        issuer: 'TESDA',
        type: 'Module Certificate',
        fileName: 'css-setting-up-networks.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/css-setting-up-networks.jpg`,
        tag: 'CSS Module',
      },
      {
        name: 'Setting Up Computer Servers',
        issuer: 'TESDA',
        type: 'Module Certificate',
        fileName: 'css-setting-up-servers.jpg',
        image: `${CERTIFICATE_ASSET_BASE}/css-setting-up-servers.jpg`,
        tag: 'CSS Module',
      },
    ],
  },
]

function CertificateMedia({ item }) {
  const [hasError, setHasError] = useState(false)
  const shouldShowImage = Boolean(item.image) && !hasError

  return (
    <div className="cert-card__media">
      {shouldShowImage ? (
        <img src={item.image} alt={item.name} onError={() => setHasError(true)} />
      ) : (
        <div className="cert-card__fallback">
          <span>{item.tag}</span>
        </div>
      )}
    </div>
  )
}

function CertificateCard({ item, onOpen }) {
  const isPreviewable = true

  return (
    <article
      className={`cert-card ${isPreviewable ? 'cert-card--interactive' : ''}`}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen(item)
        }
      }}
      aria-label={`Open preview for ${item.name}`}
    >
      <CertificateMedia item={item} />

      <div className="cert-card__content">
        <div className="cert-card__meta">
          <span className="cert-pill">{item.type}</span>
          <span className="cert-pill cert-pill--soft">{item.issuer}</span>
        </div>

        <h3 className="cert-card__title">{item.name}</h3>
        <p className="cert-card__subtitle">{item.tag}</p>

        {item.note ? <p className="cert-card__note">{item.note}</p> : null}

        {Array.isArray(item.modules) ? (
          <ul className="cert-card__module-list">
            {item.modules.map((module) => (
              <li key={module}>{module}</li>
            ))}
          </ul>
        ) : null}

        <div className="cert-card__actions">
          {item.pdf ? (
            <a
              className="button secondary cert-card__button"
              href={item.pdf}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              Open PDF
            </a>
          ) : null}
          <span className="cert-card__hint">Click to preview</span>
        </div>
      </div>
    </article>
  )
}

function CertificationGroup({ group }) {
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    if (!selectedItem) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedItem])

  return (
    <section className="cert-group">
      <div className="cert-group__header">
        <div>
          <p className="eyebrow">{group.kicker}</p>
          <h2>{group.title}</h2>
        </div>
        <p className="cert-group__description">{group.description}</p>
      </div>

      <div className={`cert-grid cert-grid--count-${Math.min(group.items.length, 3)}`}>
        {group.items.map((item) => (
          <CertificateCard key={item.name} item={item} onOpen={setSelectedItem} />
        ))}
      </div>

      {selectedItem ? (
        <div
          className="cert-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          onClick={() => setSelectedItem(null)}
        >
          <div className="cert-modal__panel" onClick={(event) => event.stopPropagation()}>
            <div className="cert-modal__header">
              <div className="cert-modal__heading">
                <p className="cert-modal__eyebrow">{selectedItem.issuer}</p>
                <h3 id="cert-modal-title" className="cert-modal__title">{selectedItem.name}</h3>
              </div>
              <button
                type="button"
                className="cert-modal__close"
                onClick={() => setSelectedItem(null)}
                aria-label="Close certificate preview"
              >
                &times;
              </button>
            </div>

            <div className="cert-modal__accent">
              <span>{selectedItem.type}</span>
            </div>

            <div className="cert-modal__media">
              {selectedItem.image ? (
                <img src={selectedItem.image} alt={selectedItem.name} />
              ) : (
                <div className="cert-modal__placeholder">
                  <div className="cert-card__fallback">
                    <span>{selectedItem.tag}</span>
                  </div>
                  <p className="cert-modal__placeholder-text">
                    {selectedItem.pdf ? 'This certificate opens as a PDF.' : 'This certificate is shown as a card only.'}
                  </p>
                </div>
              )}
            </div>

            {selectedItem.pdf ? (
              <div className="cert-modal__footer">
                <a className="button primary cert-modal__action" href={selectedItem.pdf} target="_blank" rel="noreferrer">
                  Open PDF
                </a>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default function CertificationsPage({ onBack }) {
  return (
    <div className="page-view certifications-page">
      <section className="page-hero">
        <div className="section-inner page-hero-inner">
          <p className="eyebrow">Certifications</p>
          <h1>My Certifications Journey</h1>
          <p className="page-lead">
            These are the certifications I earned throughout my career, presented in a clear and organized way.
          </p>
          <div className="page-actions">
            <button type="button" className="button primary" onClick={onBack}>
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner cert-layout">
          {certificationSections.map((group) => (
            <CertificationGroup key={group.title} group={group} />
          ))}
        </div>
      </section>
    </div>
  )
}
