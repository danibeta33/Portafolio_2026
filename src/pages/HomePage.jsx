import { HeroSection } from '../components/hero/HeroSection'
import { ContactSection } from '../components/sections/ContactSection'
import { ProfileSection } from '../components/sections/ProfileSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { ServicesSection } from '../components/sections/ServicesSection'

export default function HomePage({
  profile,
  services,
  projects,
  heroColumns,
  currentHeroTheme,
  isLightMode,
  isNamePressed,
  heroAccentColor,
  heroAccentDark,
  selectedCategory,
  categoriesWithCounts,
  onNameClick,
  onSelectCategory,
  onOpenProject,
}) {
  return (
    <main>
      <HeroSection
        profile={profile}
        isLightMode={isLightMode}
        heroColumns={heroColumns}
        currentHeroTheme={currentHeroTheme}
        isNamePressed={isNamePressed}
        heroAccentColor={heroAccentColor}
        heroAccentDark={heroAccentDark}
        onNameClick={onNameClick}
      />
      <ProfileSection profile={profile} />
      <ServicesSection services={services} />
      <ProjectsSection
        currentHeroTheme={currentHeroTheme}
        categoriesWithCounts={categoriesWithCounts}
        selectedCategory={selectedCategory}
        isLightMode={isLightMode}
        heroAccentColor={heroAccentColor}
        projects={projects}
        onSelectCategory={onSelectCategory}
        onOpenProject={onOpenProject}
      />
      <ContactSection profile={profile} />
    </main>
  )
}
