import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './components/AuthProvider'

const container = document.getElementById('root')

// Create a root.
const root = ReactDOM.createRoot(container)

// Initial render
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
