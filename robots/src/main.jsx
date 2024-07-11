import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CardList from './CardList'
import 'tachyons'
import { robots } from './robots'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>
)
