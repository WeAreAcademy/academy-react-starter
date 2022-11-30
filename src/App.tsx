import './App.css'
import { useEffect, useState } from "react";
import axios from "axios";


interface ITask {
  task: string
  id: number
}

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const handleToDoInput: (typedName: string) => void = (toDoInput: string) => {
    setInput(toDoInput);
  };
  const [tasks, setTasks] = useState<ITask[]>([])
  const [editedText, setEditedText] = useState<string>()

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://mariatens-todo-back-end.onrender.com"
      );
      const jsonBody = await response.json();
      setTasks(jsonBody);
    }
    fetchTasks()
  }, [tasks] //we want it to fetch every time we click the plus button or delete one 
  )
  const removeTask = (oneTask: ITask) => {
    const updatedNames = tasks.filter(
      (task) => task !== oneTask
    );
    setTasks(updatedNames);
  }
const [contentEditable, setContentEditable] = useState(false)

  return (<>
    <h1 className="title"> TO DO APP </h1>
    <input placeholder="Write your task here"
      value={input}
      onChange={(event) => { handleToDoInput(event.target.value) }}></input>
    <button onClick={() => axios.post("https://mariatens-todo-back-end.onrender.com", { task: input })}>+</button>
    {/* saved todos */}
    {tasks && tasks.map(task => 
    <ul key={task.id}>  
      <li><div id = {String(task.id)} contentEditable={contentEditable}> {task.task}</div> <button onClick={async () => { 
      await axios.delete(`https://mariatens-todo-back-end.onrender.com/${task.id}`)
      removeTask(task)}}>🗑️</button>
      {/* button to change  */}
      <button onClick={async () => { 
      // access that and be able to modify it 
      setContentEditable(!contentEditable)
      const container = document.getElementById(String(task.id));
      if (container?.textContent){
        await axios.patch(`https://mariatens-todo-back-end.onrender.com/${task.id}`, {task: container?.textContent})
       setEditedText(container.textContent)
        if (editedText){ //if text edited, display it 
          task.task = editedText
        }
        console.log(container?.textContent)
      }
      }}>✍️</button>
      
       </li>
      
      
    </ul>)}

  </>)
}

export default App;
