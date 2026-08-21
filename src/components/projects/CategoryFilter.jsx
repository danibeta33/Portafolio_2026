import { Button } from '../ui/Button'
import { useI18n } from '../../context/I18nContext'

export function CategoryFilter({
  categoriesWithCounts,
  selectedCategory,
  isLightMode,
  heroAccentColor,
  onSelectCategory,
}) {
  const { t } = useI18n()

  return (
    <div className="category-row" role="tablist" aria-label={t('ui.projects.categoryAria')}>
      {categoriesWithCounts.map(({ category, label, count }) => (
        <Button
          key={category}
          bg={isLightMode ? '#ffffff' : '#000000'}
          textColor={isLightMode ? '#000000' : '#ffffff'}
          borderColor={heroAccentColor}
          shadow={heroAccentColor}
          className={`category-button ${selectedCategory === category ? 'category-button-active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {`${label} (${count})`}
        </Button>
      ))}
    </div>
  )
}
