import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AchievementProvider } from './context/AchievementContext'
import { SoundProvider } from './context/SoundContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SoundProvider>
        <AchievementProvider>
          <App />
        </AchievementProvider>
      </SoundProvider>
    </BrowserRouter>
  </StrictMode>,
)
