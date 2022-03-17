import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './layouts/login/Login'
import Main from './layouts/main/Main'
import Onboarding from './layouts/onboarding/Onboarding'
import Navbar from './components/navbar/Navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/main' element={<Main />}/>
        <Route path='/' element={<Login />} />
        <Route path='/onboarding' element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App