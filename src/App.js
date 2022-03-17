import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Main from './pages/main/Main'
import Onboarding from './pages/onboarding/Onboarding'
import Navbar from './components/navbar/Navbar'
import Signup from './pages/signup/Signup'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/main' element={<Main />}/>
        <Route path='/' element={<Login />} />
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App