export function scrollTopHard() {
  window.scrollTo({ top: 0, behavior: 'auto' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export function scrollToSectionWithOffset(sectionId, offsetPx = 0) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const y = element.getBoundingClientRect().top + window.pageYOffset - offsetPx
  window.scrollTo({ top: Math.max(y, 0), behavior: 'auto' })
}
