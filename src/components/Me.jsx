import useAuth from '../hooks/useAuth'

const Me = () => {
  const { user } = useAuth()

  console.log('HELLO USER IS:', user)

  return (
    <div>
      About Me!
      <h3>{user.name}</h3>
    </div>
  )
}

export default Me
