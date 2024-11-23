import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Transactions from "./pages/Transactions";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Transactions />
  </StrictMode>,
)
