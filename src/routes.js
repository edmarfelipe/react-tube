import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Single from 'pages/Single'
import Results from 'pages/Results'
import Layout from 'pages/Layout'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="watch" element={<Single />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </Router>
  )
}
