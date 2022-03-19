import Styles from './styles'

export const MedForm = ({ handleClick, handleInputChange, handleCheckboxChange, med }) => {
  console.log(med)

  const isActiveBox = (timeArray, val) =>{
    return timeArray.includes(val) ? true : false
  }

  return (
    <form>
      <input type='text' id='name' placeholder='Medication Name' value={med.name} onChange={(e) => handleInputChange(e)} /><br/>
      <input type='text' id='dose' placeholder='Dose' value={med.dose} onChange={(e) => handleInputChange(e)} /><br />
      <input type='text' id='purpose' placeholder='Purpose' onChange={(e) => handleInputChange(e)} /><br />  
      <input type='text' id='prescriber' placeholder='Prescriber' onChange={(e) => handleInputChange(e)} /><br />
      <label htmlFor='frequency'>Frequency:</label><br />
      <input type='checkbox' id='date-sunday' value='0' checked={isActiveBox(med.frequency, '0')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-sunday'>Sun</label>
      <input type='checkbox' id='date-monday' value='1' checked={isActiveBox(med.frequency, '1')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-monday'>Mon</label>
      <input type='checkbox' id='date-tuesday' value='2' checked={isActiveBox(med.frequency, '2')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-tuesday'>Tues</label>
      <input type='checkbox' id='date-wednesday' value='3' checked={isActiveBox(med.frequency, '3')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-wednesday'>Weds</label><br />
      <input type='checkbox' id='date-thursday' value='4' checked={isActiveBox(med.frequency, '4')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-thursday'>Thurs</label>
      <input type='checkbox' id='date-friday' value='5' checked={isActiveBox(med.frequency, '5')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-friday'>Fri</label>
      <input type='checkbox' id='date-saturday' value='6' checked={isActiveBox(med.frequency, '6')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-saturday'>Sat</label><br />
      <label htmlFor='daysOfWeek'>Days:</label><br />
      <input type='checkbox' id='time-am' value='AM' checked={isActiveBox(med.time, 'AM')} onChange={(e) => handleCheckboxChange( 'time', e)}/>
      <label htmlFor='time-am'>AM</label>
      <input type='checkbox' id='time-pm' value='PM'checked={isActiveBox(med.time, 'PM')} onChange={(e) => handleCheckboxChange('time', e)}/>
      <label htmlFor='time-pm'>PM</label><br />  
      <button id='save-med-btn' className='form-primary-btn' onClick={(e) => handleClick(e)}>Save</button> 
      <button id='close-med-form-btn' className='form-secondary-btn' onClick={(e) => handleClick(e)}>Cancel</button>
    </form>
  )
}

export const DoctorForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" id='doctorFirst' placeholder='First Name'/>
      <input type="text" id='doctorLast' placeholder='Last Name'/>
      <input type="text" id='credentials' placeholder='Credentials'/>
      <input type="text" id='specialty' placeholder='Specialty'/>
      <input type="text" id='phone' placeholder='Phone Number'/>
      <button id='save-doctor-btn' className='form-primary-btn'>Save</button>
      <button id='close-doctor-form-btn' className='form-secondary-btn'>Cancel</button>
    </form>
  )
}

export const LoginForm = ({ handleSubmit, handleChange, user }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type='text' id='email' placeholder='Email' value={user.email} onChange={(e) => handleChange(e)} /><br />
      <input type='password' id='password' placeholder='Password' value={user.password} onChange={(e) => handleChange(e)} />
      <button id='user-login' className='form-primary-btn'>Log In</button>
    </form>
  )
}

export const SignupForm = ({ handleSubmit, handleChange, user }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type='text' id='userFirst' placeholder='First Name' onChange={(e) => handleChange(e)} /><br />
      <input type='text' id='userLast' placeholder='Last Name' onChange={(e) => handleChange(e)} /><br />
      <input type='text' id='email' placeholder='Email' onChange={(e) => handleChange(e)} /><br />
      <input type='password' id='password' placeholder='Username' onChange={(e) => handleChange(e)} /><br />
      <input type='password' id='passwordConfirmation' placeholder='Username' onChange={(e) => handleChange(e)} />
      <button id='user-signup' className='form-primary-btn'>Sign Up</button>
    </form>
  )
}