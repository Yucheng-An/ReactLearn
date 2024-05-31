import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Display from './Components/Display'
import Submit from './Components/Submit'

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

  const handleSubmit = (event) => {
    event.preventDefault()

     
  }
  return (
    <div>
        <Header />
        <Display currentList={currentList} />
        <Submit />
    </div>
  )
}

export default App
