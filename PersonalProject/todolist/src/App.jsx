import { useState , useEffect} from 'react'
import './App.css'
import Header from './Components/Header'
import Display from './Components/Display'
import Submit from './Components/Submit'
import data from './assets/data'




function App() {
  const [currentList, setCurrentList] = useState()
  const [newTask, setNewTask] = useState(null)



  fetch('http://localhost:3001/todolist')
  const data = await response.json()
  console.log(data)
  setCurrentList(data)

  return (
      <div>
        <Header/>
        <Display currentList={currentList}/>
        <Submit list={currentList}
                currentList={currentList}
                setCurrentList={setCurrentList}
                newTask={newTask}
                setNewTask={setNewTask}/>
      </div>
  )
}

export default App
