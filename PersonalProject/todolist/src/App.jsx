import { useState , useEffect} from 'react'
import axios from "axios";
import './App.css'
import Header from './Components/Header'
import Display from './Components/Display'
import Submit from './Components/Submit'



function App() {
  const [currentList, setCurrentList] = useState([])
  const [newTask, setNewTask] = useState(null)


  useEffect(() => {
    axios.get("http://localhost:3001/todolist").then((response)=>{
        setCurrentList(response.data)
    }).catch(())
  }, [])
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
