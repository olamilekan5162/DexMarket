import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AllProducts from "./pages/AddProduct";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddProduct />
  </StrictMode>,
)
