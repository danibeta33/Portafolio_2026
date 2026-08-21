import { lazy, Suspense, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { useI18n } from './context/I18nContext'
import { useHeroPalette } from './hooks/useHeroPalette'
import { useScrollFlag } from './hooks/useScrollFlag'
import { useThemeMode } from './hooks/useThemeMode'
import { PROFILE, PROJECT_CATEGORIES, PROJECTS, HERO_PATTERN } from './data/siteData'
import { AchievementSystem } from './components/achievements/AchievementSystem'
import { scrollToSectionWithOffset, scrollTopHard } from './utils/navigation'
import './index.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const GamePage = lazy(() => import('./pages/GamePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function LoadingScreen() {
  const { t } = useI18n()

  return (
    <main className="game-page">
      <section className="section-shell game-shell">
        <article className="game-article">
          <h1>{t('ui.app.loading', {}, 'Cargando...')}</h1>
        </article>
      </section>
    </main>
  )
}

function GameRoute({ projects, profileName, currentHeroTheme, onBack }) {
  const { id } = useParams()
  const project = projects.find((item) => item.id === Number(id))

  if (!project) {
    return <NotFoundPage currentHeroTheme={currentHeroTheme} onBackHome={onBack} />
  }

  return <GamePage project={project} profileName={profileName} currentHeroTheme={currentHeroTheme} onBack={onBack} />
}

function App() {
  const { site, isEnglish, setLocale } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const scrolled = useScrollFlag(80)
  const { isLightMode, setIsLightMode } = useThemeMode()
  const { currentHeroTheme, heroAccentColor, heroAccentDark, isNamePressed, cycleTheme } = useHeroPalette(isLightMode)
  const [selectedCategory, setSelectedCategory] = useState(PROJECT_CATEGORIES[0])
  const year = useMemo(() => new Date().getFullYear(), [])

  const profile = useMemo(
    () => ({
      ...PROFILE,
      ...(site.profile || {}),
      roles: site.profile?.roles || PROFILE.roles,
    }),
    [site.profile],
  )

  const services = useMemo(() => site.services || [], [site.services])
  const navLinks = useMemo(() => site.navLinks || [], [site.navLinks])
  const categoryLabels = useMemo(() => site.categoryLabels || {}, [site.categoryLabels])

  const localizedProjects = useMemo(() => {
    const textById = site.projects || {}
    return PROJECTS.map((project) => ({
      ...project,
      ...(textById[String(project.id)] || {}),
      categories: project.categories,
    }))
  }, [site.projects])

  const heroColumns = useMemo(() => {
    const filledColumn = Array.from({ length: 4 }, () => HERO_PATTERN).join('\n')
    return [filledColumn, filledColumn, filledColumn]
  }, [])

  const filteredProjects = useMemo(() => {
    if (selectedCategory === PROJECT_CATEGORIES[0]) return localizedProjects
    return localizedProjects.filter((project) => project.categories.includes(selectedCategory))
  }, [localizedProjects, selectedCategory])

  const categoriesWithCounts = useMemo(
    () =>
      PROJECT_CATEGORIES.map((category) => ({
        category,
        label: categoryLabels[category] || category,
        count:
          category === PROJECT_CATEGORIES[0]
            ? localizedProjects.length
            : localizedProjects.filter((project) => project.categories.includes(category)).length,
      })),
    [categoryLabels, localizedProjects],
  )

  const handleHomeNavigation = (event) => {
    if (event) event.preventDefault()
    navigate('/')
    requestAnimationFrame(scrollTopHard)
  }

  const handleSectionNavigation = (event, href) => {
    event.preventDefault()
    if (href === '#inicio') {
      handleHomeNavigation()
      return
    }

    const sectionId = href.replace('#', '')
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSectionWithOffset(sectionId, 64), 0)
      return
    }

    scrollToSectionWithOffset(sectionId, 64)
  }

  const handleOpenProject = (projectId) => {
    navigate(`/game/${projectId}`)
    requestAnimationFrame(scrollTopHard)
  }

  const showLinks = true

  return (
    <MainLayout
      links={navLinks}
      scrolled={scrolled}
      isLightMode={isLightMode}
      onToggleMode={setIsLightMode}
      isEnglish={isEnglish}
      onToggleLocale={(checked) => setLocale(checked ? 'en' : 'es')}
      onLogoClick={handleHomeNavigation}
      onNavClick={handleSectionNavigation}
      year={year}
      profileName={profile.name}
      showLinks={showLinks}
    >
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                profile={profile}
                services={services}
                projects={filteredProjects}
                heroColumns={heroColumns}
                currentHeroTheme={currentHeroTheme}
                isLightMode={isLightMode}
                isNamePressed={isNamePressed}
                heroAccentColor={heroAccentColor}
                heroAccentDark={heroAccentDark}
                selectedCategory={selectedCategory}
                categoriesWithCounts={categoriesWithCounts}
                onNameClick={cycleTheme}
                onSelectCategory={setSelectedCategory}
                onOpenProject={handleOpenProject}
              />
            }
          />
          <Route
            path="/game/:id"
            element={
              <GameRoute
                projects={localizedProjects}
                profileName={profile.name}
                currentHeroTheme={currentHeroTheme}
                onBack={handleHomeNavigation}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <AchievementSystem />
    </MainLayout>
  )
}

export default App
