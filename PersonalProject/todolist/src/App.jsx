import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Display from './Components/Display'
import Submit from './Components/Submit'
import data from './assets/data'


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
  const [newTask, setNewTask] = useState(null)

  return (
    <div>
        <Header />
        <Display currentList={currentList} />
        <Submit list={list}
                currentList = {currentList}
                setCurrentList={setCurrentList}
                newTask={newTask}
                setNewTask={setNewTask}/>
    </div>
  )
}

export default App
