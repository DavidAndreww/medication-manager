import { useState } from 'react'
import { SignupForm } from '../../components/forms/Forms'
import { formValidation } from '../../utils/formValidation'

const Signup = () => {
  const [user, setUser] = useState(
    { email: '', password: '', passwordConfirmation: '', userFirst: '', userLast: '' }
  )

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formValidation(user.password, user.passwordConfirmation, user.email)) {

      const response = await fetch("/.netlify/functions/signUp", {
        method: "POST",
        body: JSON.stringify({ user })
      })
  
      const json = await response.json()
      console.log('NETLIFY:::',json)
    }
  }

  // console.log(user)
  return (
    <div className='content'>
      <h1>Signup</h1>
      <SignupForm 
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default Signup