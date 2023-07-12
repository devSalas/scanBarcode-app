import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScanBarcodeStateProvider from './global/ScanBarcodeStateProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScanBarcodeStateProvider>
      <App />
    </ScanBarcodeStateProvider>
  </React.StrictMode>,
)
