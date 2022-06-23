import * as React from 'react'

const UserContext = React.createContext()

const useUserContext =() => {
  const context = React.useContext(UserContext)
  if (!context) {
    throw new Error(`UserContext must be used within a CountProvider`)
  }
  return context
}

const  UserProvider = (props) => {
  const [user, setUser] = React.useState(null)
  const value = React.useMemo(() => [user, setUser], [user])
  return <UserContext.Provider value={value} {...props} />
}

export {UserProvider, useUserContext}