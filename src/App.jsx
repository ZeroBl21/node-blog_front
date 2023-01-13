import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CreatePost, Home, Login, Register, PostDetails } from './pages'
import { Layout } from './components'

import './App.css'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<CreatePost />} />
            <Route path='/edit/:id' element={<CreatePost />} />
            <Route path='/post/:id' element={<PostDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
