import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { GlobalProvider } from './_helpers/Provider'

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
