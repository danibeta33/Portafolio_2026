import { Button } from '../components/ui/Button'
import { useI18n } from '../context/I18nContext'

export default function NotFoundPage({ currentHeroTheme, onBackHome }) {
  const { t } = useI18n()

  return (
    <main className={`game-page hero-theme-${currentHeroTheme}`}>
      <section className="section-shell game-shell">
        <article className="game-article">
          <h1>{t('ui.notFound.title')}</h1>
          <p>{t('ui.notFound.description')}</p>
          <div className="project-action-wrap">
            <Button bg="black" textColor="white" borderColor="white" shadow="white" onClick={onBackHome}>
              {t('ui.notFound.back')}
            </Button>
          </div>
        </article>
      </section>
    </main>
  )
}
