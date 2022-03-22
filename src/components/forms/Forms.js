import Styles from './styles'

export const MedForm = ({ handleClick, handleInputChange, handleCheckboxChange, med }) => {
  console.log(med)

  const isActiveBox = (timeArray, val) =>{
    return timeArray.includes(val) ? true : false
  }

  return (
    <Styles.Form>
      <Styles.Input type='text' name='name' placeholder='Medication Name' value={med.name} onChange={(e) => handleInputChange(e)} /><br/>
      <Styles.Input type='text' name='dose' placeholder='Dose' value={med.dose} onChange={(e) => handleInputChange(e)} /><br />
      <Styles.Input type='text' name='purpose' placeholder='Purpose' onChange={(e) => handleInputChange(e)} /><br />  
      <Styles.Input type='text' name='prescriber' placeholder='Prescriber' onChange={(e) => handleInputChange(e)} /><br />
      <div>
        <label htmlFor='frequency'>Frequency:</label><br />
          <Styles.FormPartition>
            <input type='checkbox' name='date-sunday' value='0' checked={isActiveBox(med.frequency, '0')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
            <label htmlFor='date-sunday'>Sun</label>
            <input type='checkbox' name='date-monday' value='1' checked={isActiveBox(med.frequency, '1')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
            <label htmlFor='date-monday'>Mon</label>
            <input type='checkbox' name='date-tuesday' value='2' checked={isActiveBox(med.frequency, '2')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
            <label htmlFor='date-tuesday'>Tues</label>
            <input type='checkbox' name='date-wednesday' value='3' checked={isActiveBox(med.frequency, '3')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
            <label htmlFor='date-wednesday'>Weds</label>
            <input type='checkbox' name='date-thursday' value='4' checked={isActiveBox(med.frequency, '4')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
            <label htmlFor='date-thursday'>Thurs</label>
            <input type='checkbox' name='date-friday' value='5' checked={isActiveBox(med.frequency, '5')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
            <label htmlFor='date-friday'>Fri</label>
            <input type='checkbox' name='date-saturday' value='6' checked={isActiveBox(med.frequency, '6')} onChange={(e) => handleCheckboxChange( 'frequency', e)} />
            <label htmlFor='date-saturday'>Sat</label><br />
          </Styles.FormPartition>
        <label htmlFor='daysOfWeek'>Days:</label><br />
        <Styles.FormPartition>
          <input type='checkbox' name='time-am' value='AM' checked={isActiveBox(med.time, 'AM')} onChange={(e) => handleCheckboxChange( 'time', e)}/>
          <label htmlFor='time-am'>AM</label>
          <input type='checkbox' name='time-pm' value='PM'checked={isActiveBox(med.time, 'PM')} onChange={(e) => handleCheckboxChange('time', e)}/>
          <label htmlFor='time-pm'>PM</label><br />  
        </Styles.FormPartition>
      </div>
      <Styles.FormPartition>
        <Styles.Button id='save-med-btn' className='form-primary-btn' isPrimary onClick={(e) => handleClick(e)}>Save</Styles.Button> 
        <Styles.Button id='close-med-form-btn' className='form-secondary-btn' onClick={(e) => handleClick(e)}>Cancel</Styles.Button>
      </Styles.FormPartition>
    </Styles.Form>
  )
}

export const DoctorForm = ({ handleClick, handleInputChange, doctor }) => {
  console.log(doctor)
  return (
    <Styles.Form>
      <Styles.Input type="text" name='firstName' placeholder='First Name' value={doctor.firstName} onChange={(e) => handleInputChange(e)} />
      <Styles.Input type="text" name='lastName' placeholder='Last Name' value={doctor.lastName} onChange={(e) => handleInputChange(e)} />
      <Styles.Input type="text" name='credentials' placeholder='Credentials' value={doctor.credentials} onChange={(e) => handleInputChange(e)} />
      <Styles.Input type="text" name='specialty' placeholder='Specialty' value={doctor.specialty} onChange={(e) => handleInputChange(e)} />
      <Styles.Input type="text" name='phone' placeholder='Phone Number' value={doctor.phone} onChange={(e) => handleInputChange(e)} />
      <div>
        <Styles.Button id='save-doctor-btn' className='form-primary-btn' isPrimary onClick={(e) => handleClick(e)}>Save</Styles.Button>
        <Styles.Button id='close-doctor-form-btn' className='form-secondary-btn' onClick={(e) => handleClick(e)}>Cancel</Styles.Button>
      </div>
    </Styles.Form>
  )
}

export const LoginForm = ({ handleSubmit, handleChange, user }) => {
  return (
    <Styles.Form onSubmit={(e) => handleSubmit(e)}>
      <Styles.Input type='text' name='email' placeholder='Email' value={user.email} onChange={(e) => handleChange(e)} /><br />
      <Styles.Input type='password' name='password' placeholder='Password' value={user.password} onChange={(e) => handleChange(e)} /><br />
      <Styles.Button id='user-login' className='form-primary-btn' isPrimary solo>Log In</Styles.Button>
    </Styles.Form>
  )
}

export const SignupForm = ({ handleSubmit, handleChange, user }) => {
  return (
    <Styles.Form onSubmit={(e) => handleSubmit(e)}>
      <Styles.Input type='text' name='userFirst' placeholder='First Name' onChange={(e) => handleChange(e)} /><br />
      <Styles.Input type='text' name='userLast' placeholder='Last Name' onChange={(e) => handleChange(e)} /><br />
      <Styles.Input type='text' name='email' placeholder='Email' onChange={(e) => handleChange(e)} /><br />
      <Styles.Input type='password' name='password' placeholder='Password' onChange={(e) => handleChange(e)} /><br />
      <Styles.Input type='password' name='passwordConfirmation' placeholder='Confirm Password' onChange={(e) => handleChange(e)} /><br />
      <Styles.Button id='user-signup' className='form-primary-btn' isPrimary solo>Sign Up</Styles.Button>
    </Styles.Form>
  )
}