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
        Log In
      </button>
      <button
        onClick={() => {
          localStorage.removeItem('token')
          setToken(null)
        }}
      >
        Log Out
      </button>
    </div>
  )
}

export default Login
