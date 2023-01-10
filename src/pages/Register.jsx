import { useState } from 'react'

const initialState = {
  username: '',
  password: ''
}

const Register = () => {
  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <form className='register' onSubmit={handleSubmit}>
      <h1>Register</h1>
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
      <button>Register</button>
    </form>
  )
}

export default Register
