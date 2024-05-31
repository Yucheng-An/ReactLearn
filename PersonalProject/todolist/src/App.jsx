import { useState } from 'react'
import './App.css'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header />
        <h1>{count}</h1>  
    </div>
  )
}

export default App
