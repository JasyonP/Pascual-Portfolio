import React from 'react'

const ICON_BASE = `${import.meta.env.BASE_URL}assets/images/icons`

function SkillVisual({ item, size = 32 }) {
  if (item.icon) {
    return (
      <img
        className="skill-visual"
        src={`${ICON_BASE}/${item.icon}.png`}
        alt=""
        style={{ width: size, height: size }}
      />
    )
  }

  return (
    <span className="skill-monogram" aria-hidden="true" style={{ width: size, height: size, fontSize: size * 0.5 }}>
      {item.name.trim().charAt(0).toUpperCase()}
    </span>
  )
}

const LEVEL_CONFIG = {
  Proficient: {
    label: 'Proficient',
    color: '#22c55e',
    bg: 'rgba(34, 197, 94, 0.12)',
  },
  Comfortable: {
    label: 'Comfortable',
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.12)',
  },
  Learning: {
    label: 'Learning',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.12)',
  },
}

function SkillItemCard({ item }) {
  const level = LEVEL_CONFIG[item.level] ?? LEVEL_CONFIG.Learning

  return (
    <div className="skill-item-card">
      <div className="skill-item-card__icon">
        <SkillVisual item={item} size={28} />
      </div>
      <div className="skill-item-card__body">
        <p className="skill-item-card__name">{item.name}</p>
        <span className="skill-item-card__level" style={{ color: level.color, background: level.bg }}>
          {level.label}
        </span>
      </div>
    </div>
  )
}

function SkillCategoryCard({ group }) {
  return (
    <section className="skill-category-card">
      <header className="skill-category-card__header">
        <div className="skill-category-card__title-row">
          <span className="skill-category-card__dot" />
          <h3 className="skill-category-card__title">{group.category}</h3>
        </div>
        {group.description ? (
          <p className="skill-category-card__description">{group.description}</p>
        ) : null}
      </header>
      <div className="skill-category-card__grid">
        {group.items.map((item) => (
          <SkillItemCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}

export function SkillCards({ items }) {
  return (
    <div className="skill-card-grid">
      {items.map((item) => (
        <div className="skill-card" key={item.name}>
          <SkillVisual item={item} />
          <span className="skill-card__name">{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export function SkillGroups({ groups }) {
  return (
    <div className="skill-categories">
      {groups.map((group) => (
        <SkillCategoryCard key={group.category} group={group} />
      ))}
    </div>
  )
}

export default function SkillsPage({ groups, onBack }) {
  return (
    <div className="page-view skills-page">
      <section className="page-hero">
        <div className="section-inner page-hero-inner">
          <p className="eyebrow">Skills</p>
          <h1>Technical Skills</h1>
          <p className="page-lead">
            A detailed breakdown of my frontend, backend, tools, and design skill set.
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
          <SkillGroups groups={groups} />
        </div>
      </section>
    </div>
  )
}
