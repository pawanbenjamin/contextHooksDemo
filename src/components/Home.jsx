import { useContext } from 'react'
import AuthContext from '../AuthContext'
const Home = () => {
  const { user } = useContext(AuthContext)

  console.log('User', user)

  return <div>The Home Page</div>
}

export default Home
