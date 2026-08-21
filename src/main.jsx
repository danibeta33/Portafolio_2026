import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AchievementProvider } from './context/AchievementContext'
import { I18nProvider } from './context/I18nContext'
import { SoundProvider } from './context/SoundContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <SoundProvider>
          <AchievementProvider>
            <App />
          </AchievementProvider>
        </SoundProvider>
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>,
)
