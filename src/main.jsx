import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'

AOS.init({
  duration: 1200,
  once: false,
  offset: 120,
  delay: 0,
  easing: 'ease-out-back',
  disable: false,
  mirror: true,
  anchorPlacement: 'top-bottom',
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
