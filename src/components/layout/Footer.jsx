import { useI18n } from '../../context/I18nContext'

export function Footer({ year, name }) {
  const { t } = useI18n()
  return <footer className="site-footer">{`© ${year} ${name}. ${t('ui.footer.rights')}`}</footer>
}
