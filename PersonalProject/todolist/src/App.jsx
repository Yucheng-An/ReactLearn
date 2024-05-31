import { useState , useEffect} from 'react'
import './App.css'
import Header from './Components/Header'
import Display from './Components/Display'
import Submit from './Components/Submit'
import data from './assets/data'





function App() {
  const [currentList, setCurrentList] = useState(data.tasks)
  const [newTask, setNewTask] = useState(null)

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('http://localhost:3001/todolist')
      const data = await response.json()
      setCurrentList(data)
    }
  })
  return (
    <div>
        <Header />
        <Display currentList={currentList} />
        <Submit list={currentList}
                currentList = {currentList}
                setCurrentList={setCurrentList}
                newTask={newTask}
                setNewTask={setNewTask}/>
    </div>
  )
}

export default App
