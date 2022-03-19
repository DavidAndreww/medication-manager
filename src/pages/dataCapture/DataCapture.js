import { useState, useEffect } from 'react'
import { MedForm } from "../../components/forms/Forms"

const DataCapture = ({ currMed }) => {
  const [med, setMed] = useState()

  useEffect(() => {
    setMed(currMed)
  },[])

  const handleClick = (e) => {
    e.preventDefault()
    
    if(e.target.id === 'close-med-form-btn') {
      console.log('link back to main - no fetch required')
    } else {
      console.log('update db with ', med)
    }
  }

  const handleInputChange = (e) => {
    setMed({ ...med, [e.target.id]: e.target.value })
  }

  const handleCheckboxChange = (timeType, e) => {
    const newArr = med[timeType]
    console.log(newArr)
    const idx = newArr.indexOf(e.target.value)
    idx >= 0 ? newArr.splice(idx,1) : newArr.push(e.target.value)
    setMed({ ...med, [timeType]: newArr })
  } 

  return (
    med === undefined ? (
      <h4>Loading...</h4>
    ) : (
      <div className='content'>
        <h1>DataCapture Page</h1>
        <MedForm 
          handleClick={handleClick} 
          handleInputChange={handleInputChange} 
          handleCheckboxChange={handleCheckboxChange}
          med={med}/>
      </div>
    )
  )
}

export default DataCapture