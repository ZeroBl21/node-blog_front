import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Login, Register } from './pages'
import { Layout } from './components'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
