import { useState } from 'react'
import { LoginForm } from "../../components/forms/Forms"

const Login = () => {
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
      <h1>Login Page</h1>
      <LoginForm 
        user={user}
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />
    </div>
  )
}

export default Login