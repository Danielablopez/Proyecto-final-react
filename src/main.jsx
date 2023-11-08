import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Componentes/App.css'
import { AppProvider } from "./Componentes/AppContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
