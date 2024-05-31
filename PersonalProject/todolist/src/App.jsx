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
    
  })
  return (
    <div>
        <Header />
        <Display currentList={currentList} />
        <Submit list={data.tasks}
                currentList = {currentList}
                setCurrentList={setCurrentList}
                newTask={newTask}
                setNewTask={setNewTask}/>
    </div>
  )
}

export default App
