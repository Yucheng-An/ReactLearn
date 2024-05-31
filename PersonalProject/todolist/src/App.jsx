import { useState } from 'react'
import './App.css'
import Header from './Components/Header'

const list = [
  {
    id: 1,
    title: 'Go to the gym',
    completed: false
  },
  {
    id: 2,
    title: 'Do laundry',
    completed: true
  },
  {
    id: 3,
    title: 'Finish project',
    completed: false
  }
]


function App() {
  const [currentList, setCurrentList] = useState(list)

  return (
    <div>
        <Header />
        <div id = "core">
            <ul>
                {currentList.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default App
