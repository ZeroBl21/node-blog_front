import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useUser } from '../context/UserContext'

const initialState = {
  username: '',
  password: ''
}

const Login = () => {
  const [form, setForm] = useState(initialState)
  const [redirect, setRedirect] = useState(false)
  const { setUser } = useUser()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.user) {
          setUser(res)
          setRedirect(true)
        }
      })
      .catch((err) => console.error(err))
  }

  if (redirect) {
    return <Navigate to='/' />
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type='text'
        name='username'
        placeholder='username'
        value={form.username}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        placeholder='password'
        value={form.password}
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  )
}

export default Login
