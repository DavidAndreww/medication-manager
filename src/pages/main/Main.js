import { useState, useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import MedicationCard from '../../components/medicationCard/MedicationCard'
import Styles from '../../components/medicationCard/styles'


const currMed = {
  name: 'Xanax',
  dose: '12mg',
  frequency: ['0', '4'],
  time: ['AM'], 
  id: 561,
  prescriber: 'Dr. Sanchez',
  purpose: 'Cold & Flue'
}

const Main = () => {
  return (
    <div className='content'>
      <h1>Main Page</h1>
      <MedicationCard props={currMed}/>
      <MedicationCard props={currMed}/>
      <MedicationCard props={currMed}/>

      <Styles.Buffer />
      <Footer />
    </div>
  )
}

export default Main


