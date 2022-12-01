import './App.css'
import { useEffect, useState } from "react";
import axios from "axios";


interface ITask {
  task: string
  id: number
  date: Date
}

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const handleToDoInput: (typedName: string) => void = (toDoInput: string) => {
    setInput(toDoInput);
  };
  const [tasks, setTasks] = useState<ITask[]>([])
  const [editedText, setEditedText] = useState<string>()
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([])

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
const handleCompleted =  (task: ITask) => {
  setCompletedTasks([...completedTasks, task])}

  return (<>
    <h1 className="title"> TO DO APP </h1>
    <div className = "inputBox"> 
    <input placeholder="Write your task here"
      value={input}
      onChange={(event) => { handleToDoInput(event.target.value) }}></input>
    <button onClick={async () => await axios.post("https://mariatens-todo-back-end.onrender.com", { task: input, date: new Date().toLocaleDateString() })}>+</button>
    </div>
    {/* saved todos */}
    {tasks && tasks.map(task => 
    <ul key={task.id}>  
      <li><div id = {String(task.id)} contentEditable={contentEditable}> 
      {task.task} <small> {task.date}</small></div> 
         {/* button to delete */}
        <button onClick={async () => { 
        await axios.delete(`https://mariatens-todo-back-end.onrender.com/${task.id}`)
        removeTask(task)}}>🗑️</button>
        {/* button to change  */}
        <button onClick={async () => { 
        setContentEditable(!contentEditable)
        const container = document.getElementById(String(task.id));
        if (container?.textContent){
          await axios.patch(`https://mariatens-todo-back-end.onrender.com/${task.id}`, {task: container?.textContent})
        setEditedText(container.textContent)
          if (editedText){ //if text edited, display it 
            task.task = editedText
          }
        }
        }}>✍️</button>
      {/* button to mark as complete*/}
        <button onClick = {async () => {
          await axios.delete(`https://mariatens-todo-back-end.onrender.com/${task.id}`)
          removeTask(task); 
          handleCompleted(task); 
          await axios.post("https://mariatens-todo-back-end.onrender.com/completed-tasks", {task:document.getElementById(String(task.id))?.textContent,
        date: new Date().toLocaleDateString()})
         
        
      }
      }>✔️</button>
      </li>
    </ul>)}
    <hr className = "completed"></hr>
    <h2 className = "title">Completed tasks</h2>
    {completedTasks.map(compTask => 
      <ul key = {compTask.id}>
        <li><s>{compTask.task}</s></li>
      </ul>)}

  </>)
}

export default App;
