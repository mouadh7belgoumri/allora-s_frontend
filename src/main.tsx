import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
let root = document.getElementById('root')!;

createRoot(root).render(
  
    <StrictMode>
      <App />
    </StrictMode>,
  
)
