import React from "react"
import { Route, Routes, Switch } from 'react-router-dom'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

function App() {
  return (
    <Routes>
      <Route path="*" element={<Airlines/>} />
      <Route path="/airlines/:slug" element={<Airline/>}/>
    </Routes>
  )
}

export default App
