import React, { useState } from 'react'


export default function ProjectsPage({ projects, onBack }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <div className="page-view">
      <section className="page-hero">
        <div className="section-inner page-hero-inner">
          <p className="eyebrow">Projects</p>
          <h1>Main Project Showcase</h1>
          <p className="page-lead">
            A dedicated space for your strongest frontend work, case-study style details, and a cleaner presentation than the home preview.
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

            <div className="projects-list">

              {projects.map((project) => (
                <article
                  className="project-showcase"
                  key={project.title}
                >

                  <div className="project-showcase__image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-showcase__img"
                    />
                  </div>

                  <div className="project-showcase__content">

                    <span className="project-showcase__type">
                      {project.type}
                    </span>

                    <h2>{project.title}</h2>

                    <p className="project-showcase__description">
                      {project.description}
                    </p>

                    <div className="project-showcase__stack">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-showcase__footer">
                      <button
                        className="button primary"
                        onClick={() => {
                        setSelectedProject(project)
                        setCurrentImage(0)
                        }}
                        >
                        View Project
                      </button>

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>
        {selectedProject && (
  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="project-modal"
      onClick={(e) => e.stopPropagation()}
    >

      {/* HEADER */}
      <div className="project-modal-header">
        <div>
          <span className="project-showcase__type">
            {selectedProject.type}
          </span>
          <h2>{selectedProject.title}</h2>
        </div>

        <button
          className="project-modal-close"
          onClick={() => setSelectedProject(null)}
        >
          ×
        </button>
      </div>

      {/* BODY */}
      <div className="project-modal-body">

        {/* Carousel */}
<div className="project-carousel">

  <img
    src={selectedProject.images[currentImage]}
    alt={selectedProject.title}
    className="project-modal-image"
  />

  <div className="project-carousel-buttons">
    <button
      className="carousel-prev"
      onClick={() =>
        setCurrentImage(
          (currentImage - 1 + selectedProject.images.length) %
            selectedProject.images.length
        )
      }
    >
      ❮
    </button>

    <button
      className="carousel-next"
      onClick={() =>
        setCurrentImage(
          (currentImage + 1) %
            selectedProject.images.length
        )
      }
    >
      ❯
    </button>
  </div>

</div>

        {/* Dots */}
        <div className="project-carousel-dots">
          {selectedProject.images.map((img, index) => (
            <span
              key={index}
              className={index === currentImage ? "active" : ""}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
        {/* Description */}
        <div className="project-section">
          <h3>Overview</h3>

          <p>
            {selectedProject.description}
          </p>
        </div>
        {/* Tech */}
        <div className="project-section">

          <div className="project-showcase__stack">
            {selectedProject.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>


    </div>
  </div>
)}
    </div>
    
  )
  
}
