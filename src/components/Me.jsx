import useAuth from '../hooks/useAuth'

const Me = () => {
  const { user } = useAuth()
  return (
    <div>
      About Me!
      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
      </ul>
    </div>
  )
}

export default Me
