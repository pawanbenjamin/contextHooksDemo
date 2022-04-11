import { useState } from 'react'
import { useEffect } from 'react'
import AuthContext from '../AuthContext'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [token, setToken] = useState(null)

  useEffect(() => {
    // Could Check if there is a token in localStorage
    async function getUser() {
      if (localStorage.getItem('token')) {
        const newUser = { name: 'Elvis', age: 99, email: 'elvis@evlis.net' }
        setUser(newUser)
      } else {
        setUser({})
      }
    }
    getUser()
  }, [token])

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
