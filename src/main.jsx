import React from 'react'
import ReactDOM from 'react-dom/client'
import Airbnb from './Air/Airbnb.jsx'
import ExpenseTrackerApp from "./ExoenseTracker/ExpenseTracker.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ImageGalleryApp} from "./ImageGallery/ImageGalleryApp.jsx"
import RecipePage from './Recipe/RecipePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes >
        <Route path="*" element={<div className="w-screen h-screen bg-gray-200 text-yellow-500 flex justify-center items-center font-bold"><h1>404, Not Found</h1></div>}/>
        <Route path="/airbnb" element={<Airbnb />} />
        <Route path="expense-tracker" element={<ExpenseTrackerApp />} />
        <Route path="/image-gallery" element={<ImageGalleryApp />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
