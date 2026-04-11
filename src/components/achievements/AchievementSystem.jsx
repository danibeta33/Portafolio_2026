import { useState } from 'react'
import { useAchievements } from '../../context/AchievementContext'
import { AchievementDropUp } from './AchievementDropUp'
import { AchievementModal } from './AchievementModal'
import { AchievementNotification } from './AchievementNotification'

export function AchievementSystem() {
  const { achievements, notifications, toggleRainbowMode, isRainbowManual, isRainbowUnlocked, rainbowMessage } =
    useAchievements()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const [modalAchievement, setModalAchievement] = useState(null)

  const handleSelect = (achievement) => {
    setSelectedId(achievement.id)
    if (!achievement.unlocked) return
    setModalAchievement(achievement)
  }

  const handleCloseModal = () => {
    setModalAchievement(null)
    setSelectedId(null)
    setIsOpen(false)
  }

  return (
    <>
      <AchievementDropUp
        achievements={achievements}
        isOpen={isOpen}
        selectedId={selectedId}
        onToggle={() => setIsOpen((prev) => !prev)}
        onSelect={handleSelect}
        onToggleRainbow={toggleRainbowMode}
        isRainbowManual={isRainbowManual}
        isRainbowUnlocked={isRainbowUnlocked}
        rainbowMessage={rainbowMessage}
      />

      <AchievementModal achievement={modalAchievement} onClose={handleCloseModal} />
      <AchievementNotification notifications={notifications} />
    </>
  )
}
