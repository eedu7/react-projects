import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './Air/App.jsx'
import './index.css'
import ExpenseTrackerApp from "./ExoenseTracker/ExpenseTracker.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ExpenseTrackerApp />
  </React.StrictMode>,
)
