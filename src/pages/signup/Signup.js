import { useState } from 'react'
import { SignupForm } from '../../components/forms/Forms'

const Signup = () => {
  const [user, setUser] = useState(
    { email: '', password: '', passwordConfirmation: '', userFirst: '', userLast: '' }
    )

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("./netlify/functions/signup", {
      method: "POST",
      body: JSON.stringify(user)
    })

    const json = await response.json()
    console.log(json)

  }

  console.log(user)
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