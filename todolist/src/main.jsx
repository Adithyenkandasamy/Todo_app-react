import { StrictMode } from 'react'
// strict mode is used for React to prevent bugs in the application 
import { createRoot } from 'react-dom/client'
// we use curly braces
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
