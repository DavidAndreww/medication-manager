import { useState } from 'react'
import { SignupForm } from '../../components/forms/Forms'

const Signup = () => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    console.log(e)
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