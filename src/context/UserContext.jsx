import React, { createContext, useState } from 'react'

const UserContext = createContext({})

function UserProvider({ children }) {
  const [user, setUser] = useState({})

  const value = { user, setUser }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

export { UserProvider, useUser }
