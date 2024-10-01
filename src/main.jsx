import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./i18n.jsx"
import { LanguageProvider } from './components/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
)
