import useAuth from '../hooks/useAuth'
const Home = () => {
  const { user } = useAuth()
  console.log({ user })
  return <div>The Home Page</div>
}

export default Home
