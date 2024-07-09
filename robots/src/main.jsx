import React from 'react'
import ReactDOM from 'react-dom/client'
import Hello from './Hello.jsx'  // Importa el componente Hello
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello />  {/* Usa el componente Hello */}
  </React.StrictMode>,
)
