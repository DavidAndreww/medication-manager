import { useState, useEffect } from 'react'
import { MedForm, DoctorForm } from "../../components/forms/Forms"

// renders medication or doctor form depending on formType argument
const DataCapture = ({ currEntity, formType }) => {
  const [entity, setEntity] = useState()

  useEffect(() => {
    setEntity(currEntity)
  },[])

  const handleClick = (e) => {
    e.preventDefault()
    // logic flow dependent on 'save' or 'cancel' button click
    if(e.target.id.split('-').includes('close')) {
      console.log('link back to main - no fetch required')
      return
    } 
    
    if(formType === 'med') {
      console.log('update medicine table with: ', entity)
    } else {
      console.log('update doctor table with: ', entity)
    }
  }

  // text inputs
  const handleInputChange = (e) => {
    setEntity({ ...entity, [e.target.name]: e.target.value })
  }

  // checkbox inputs
  const handleCheckboxChange = (timeType, e) => {
    const newArr = entity[timeType]
    const idx = newArr.indexOf(e.target.value)
    idx >= 0 ? newArr.splice(idx,1) : newArr.push(e.target.value)
    setEntity({ ...entity, [timeType]: newArr })
  } 

  // renders according to formType
  return (
    entity === undefined ? (
      <div className='content'>
        <h4>Loading...</h4>
      </div>
    ) : formType === 'med' ? (
      <div className='content'>
        <h1>DataCapture Page</h1>
        <MedForm 
          handleClick={handleClick} 
          handleInputChange={handleInputChange} 
          handleCheckboxChange={handleCheckboxChange}
          med={entity}
        />
      </div>
    ) : (
      <div className='content'>
        <h1>DataCapture Page</h1>
        <DoctorForm 
          handleClick={handleClick} 
          handleInputChange={handleInputChange} 
          doctor={entity}
        />
      </div>
    )
  )
}

export default DataCapture