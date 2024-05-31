import { useState , useEffect} from 'react'
import './App.css'
import Header from './Components/Header'
import Display from './Components/Display'
import Submit from './Components/Submit'
import data from './assets/data'



function App() {
  const [currentList, setCurrentList] = useState(null)
  const [newTask, setNewTask] = useState(null)

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/posts');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchData();
    setCurrentList(data.tasks)
  }
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
