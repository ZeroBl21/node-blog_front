import { Outlet } from 'react-router-dom'

import { Header } from '../'

const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default Layout
