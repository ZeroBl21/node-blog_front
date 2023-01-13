import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useUser } from '../../context/UserContext'

const Header = () => {
  const { user, setUser } = useUser()

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((res) => setUser(res))
  }, [])

  function logout() {
    fetch('http://localhost:4000/logout', {
      method: 'POST',
      credentials: 'include'
    })

    setUser(null)
  }

  return (
    <header>
      <Link to='/' className='logo'>
        &lt;ZeroBl /&gt;
      </Link>
      <nav>
        {user ? (
          <>
            <Link to='/create'>Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
