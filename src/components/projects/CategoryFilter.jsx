import { Button } from '../ui/Button'

export function CategoryFilter({
  categoriesWithCounts,
  selectedCategory,
  isLightMode,
  heroAccentColor,
  onSelectCategory,
}) {
  return (
    <div className="category-row" role="tablist" aria-label="Categorias de bloques">
      {categoriesWithCounts.map(({ category, count }) => (
        <Button
          key={category}
          bg={isLightMode ? '#ffffff' : '#000000'}
          textColor={isLightMode ? '#000000' : '#ffffff'}
          borderColor={heroAccentColor}
          shadow={heroAccentColor}
          className={`category-button ${selectedCategory === category ? 'category-button-active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {`${category} (${count})`}
        </Button>
      ))}
    </div>
  )
}
