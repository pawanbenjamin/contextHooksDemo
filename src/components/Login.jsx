import useAuth from '../hooks/useAuth'

const Login = () => {
  const { setToken } = useAuth()

  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem('token', 123456)
          setToken(123456)
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          localStorage.removeItem('token')
          setToken(null)
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Login
