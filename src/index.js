import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')

// Create a root.
const root = ReactDOM.createRoot(container)

// Initial render
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
