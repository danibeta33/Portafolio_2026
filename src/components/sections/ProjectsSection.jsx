import { CategoryFilter } from '../projects/CategoryFilter'
import { ProjectCardCompact } from '../projects/ProjectCardCompact'
import { ProjectCardDetailed } from '../projects/ProjectCardDetailed'

export function ProjectsSection({
  currentHeroTheme,
  categoriesWithCounts,
  selectedCategory,
  isLightMode,
  heroAccentColor,
  projects,
  onSelectCategory,
  onOpenProject,
}) {
  const isDetailedProjectsView = selectedCategory !== 'Todos'

  return (
    <section id="proyectos" className={`section-shell projects-shell hero-theme-${currentHeroTheme}`}>
      <h2>{'<Proyectos />'}</h2>
      <p>Proyectos filtrables por categoria para mostrar proyectos con imagen, descripcion y etiquetas.</p>

      <CategoryFilter
        categoriesWithCounts={categoriesWithCounts}
        selectedCategory={selectedCategory}
        isLightMode={isLightMode}
        heroAccentColor={heroAccentColor}
        onSelectCategory={onSelectCategory}
      />

      <div className={`project-grid ${isDetailedProjectsView ? 'project-grid-detailed' : 'project-grid-compact'}`}>
        {projects.map((project) =>
          isDetailedProjectsView ? (
            <ProjectCardDetailed
              key={project.id}
              project={project}
              isLightMode={isLightMode}
              heroAccentColor={heroAccentColor}
              onOpenProject={onOpenProject}
            />
          ) : (
            <ProjectCardCompact
              key={project.id}
              project={project}
              isLightMode={isLightMode}
              heroAccentColor={heroAccentColor}
              onOpenProject={onOpenProject}
            />
          ),
        )}
      </div>
    </section>
  )
}
