
import './App.css'
import { Link } from 'react-router-dom'
import { Button } from './components/ui/button'
function App() {

  return (
    <div>
      <h1>Welcome to My Website</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
  
    </div>
  )
}

export default App
