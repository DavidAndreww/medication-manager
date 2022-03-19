import Styles from './styles'

export const MedForm = ({ handleClick, handleInputChange, handleCheckboxChange, med }) => {
  console.log(med)

  const isActiveBox = (timeArray, val) =>{
    return timeArray.includes(val) ? true : false
  }

  return (
    <form>
      <input type='text' name='name' placeholder='Medication Name' value={med.name} onChange={(e) => handleInputChange(e)} /><br/>
      <input type='text' name='dose' placeholder='Dose' value={med.dose} onChange={(e) => handleInputChange(e)} /><br />
      <input type='text' name='purpose' placeholder='Purpose' onChange={(e) => handleInputChange(e)} /><br />  
      <input type='text' name='prescriber' placeholder='Prescriber' onChange={(e) => handleInputChange(e)} /><br />
      <label htmlFor='frequency'>Frequency:</label><br />
      <input type='checkbox' name='date-sunday' value='0' checked={isActiveBox(med.frequency, '0')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-sunday'>Sun</label>
      <input type='checkbox' name='date-monday' value='1' checked={isActiveBox(med.frequency, '1')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-monday'>Mon</label>
      <input type='checkbox' name='date-tuesday' value='2' checked={isActiveBox(med.frequency, '2')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-tuesday'>Tues</label>
      <input type='checkbox' name='date-wednesday' value='3' checked={isActiveBox(med.frequency, '3')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-wednesday'>Weds</label><br />
      <input type='checkbox' name='date-thursday' value='4' checked={isActiveBox(med.frequency, '4')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-thursday'>Thurs</label>
      <input type='checkbox' name='date-friday' value='5' checked={isActiveBox(med.frequency, '5')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-friday'>Fri</label>
      <input type='checkbox' name='date-saturday' value='6' checked={isActiveBox(med.frequency, '6')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
      <label htmlFor='date-saturday'>Sat</label><br />
      <label htmlFor='daysOfWeek'>Days:</label><br />
      <input type='checkbox' name='time-am' value='AM' checked={isActiveBox(med.time, 'AM')} onChange={(e) => handleCheckboxChange( 'time', e)}/>
      <label htmlFor='time-am'>AM</label>
      <input type='checkbox' name='time-pm' value='PM'checked={isActiveBox(med.time, 'PM')} onChange={(e) => handleCheckboxChange('time', e)}/>
      <label htmlFor='time-pm'>PM</label><br />  
      <button id='save-med-btn' className='form-primary-btn' onClick={(e) => handleClick(e)}>Save</button> 
      <button id='close-med-form-btn' className='form-secondary-btn' onClick={(e) => handleClick(e)}>Cancel</button>
    </form>
  )
}

export const DoctorForm = ({ handleClick, handleInputChange, doctor }) => {
  console.log(doctor)
  return (
    <form>
      <input type="text" name='firstName' placeholder='First Name' value={doctor.firstName} onChange={(e) => handleInputChange(e)} /><br />
      <input type="text" name='lastName' placeholder='Last Name' value={doctor.lastName} onChange={(e) => handleInputChange(e)} /><br />
      <input type="text" name='credentials' placeholder='Credentials' value={doctor.credentials} onChange={(e) => handleInputChange(e)} /><br />
      <input type="text" name='specialty' placeholder='Specialty' value={doctor.specialty} onChange={(e) => handleInputChange(e)} /><br />
      <input type="text" name='phone' placeholder='Phone Number' value={doctor.phone} onChange={(e) => handleInputChange(e)} /><br />
      <button id='save-doctor-btn' className='form-primary-btn' onClick={(e) => handleClick(e)}>Save</button>
      <button id='close-doctor-form-btn' className='form-secondary-btn' onClick={(e) => handleClick(e)}>Cancel</button>
    </form>
  )
}

export const LoginForm = ({ handleSubmit, handleChange, user }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type='text' name='email' placeholder='Email' value={user.email} onChange={(e) => handleChange(e)} /><br />
      <input type='password' name='password' placeholder='Password' value={user.password} onChange={(e) => handleChange(e)} /><br />
      <button id='user-login' className='form-primary-btn'>Log In</button>
    </form>
  )
}

export const SignupForm = ({ handleSubmit, handleChange, user }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type='text' name='userFirst' placeholder='First Name' onChange={(e) => handleChange(e)} /><br />
      <input type='text' name='userLast' placeholder='Last Name' onChange={(e) => handleChange(e)} /><br />
      <input type='text' name='email' placeholder='Email' onChange={(e) => handleChange(e)} /><br />
      <input type='password' name='password' placeholder='Username' onChange={(e) => handleChange(e)} /><br />
      <input type='password' name='passwordConfirmation' placeholder='Username' onChange={(e) => handleChange(e)} /><br />
      <button id='user-signup' className='form-primary-btn'>Sign Up</button>
    </form>
  )
}