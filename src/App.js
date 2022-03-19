import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Main from './pages/main/Main'
import Onboarding from './pages/onboarding/Onboarding'
import Navbar from './components/navbar/Navbar'
import Signup from './pages/signup/Signup'
import DataCapture from './pages/dataCapture/DataCapture'
import Landing from './pages/landing/Landing'

const currMed = {
  name: 'Xanax',
  dose: '12mg',
  frequency: ['0', '4'],
  time: ['AM'], 
  id: 561,
  prescriber: 'Dr. Sanchez',
  purpose: 'Cold & Flue'

}

const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/main' element={<Main />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/update' element={<DataCapture currMed={currMed} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App