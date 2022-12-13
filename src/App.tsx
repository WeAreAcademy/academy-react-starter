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
  const [tasks, setTasks] = useState<ITask[]>([])
  const [editedText, setEditedText] = useState<string>()
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([])
  const [contentEditable, setContentEditable] = useState(false)
  const fetchTasks = async () => {
    const response = await fetch(
      "https://mariatens-todo-sql-backend.onrender.com/tasks"
    );
    const jsonBody = await response.json();
    setTasks(jsonBody);
  }
  useEffect(() => {
    fetchTasks()
  }, [completedTasks] 
  )
  const fetchCompletedTasks = async () => {
    const response = await fetch(
      "https://mariatens-todo-sql-backend.onrender.com/completed-tasks"
    );
    const jsonBody = await response.json();
    setCompletedTasks(jsonBody);
  }
  useEffect(() => {
    fetchCompletedTasks()
  }, [] 
  )

// const handleCompleted =  (task: ITask) => {
//   setCompletedTasks([...completedTasks, task])}
const handleToDoInput = (toDoInput: string) => {
    setInput(toDoInput);
  };
  return (<>
    <h1 className="title"> TO DO APP </h1>
    <div className = "inputBox"> 
    <input placeholder="Write your task here"
      value={input}
      onChange={(event) => { handleToDoInput(event.target.value) }}></input>
    <button onClick={async () => {
      await axios.post("https://mariatens-todo-sql-backend.onrender.com/tasks",
       { task: input, date: new Date().toLocaleDateString() })
       fetchTasks()
       setInput("")
      }
       }>+</button>
    </div>
    {/* saved todos */}
    {tasks && tasks.map(task => 
    <ul key={task.id}>  
      <li><div id = {String(task.id)} contentEditable={contentEditable}> 
      {task.task} <small> {task.date}</small></div> 
         {/* button to delete */}
        <button onClick={async () => { 
        await axios.delete(`https://mariatens-todo-sql-backend.onrender.com/tasks/${task.id}`)
        fetchTasks()
        }}>🗑️</button>
        {/* button to change  */}
        <button onClick={async () => { 
        setContentEditable(!contentEditable)
        const container = document.getElementById(String(task.id));
        if (container?.textContent){
          await axios.patch(`https://mariatens-todo-sql-backend.onrender.com/tasks/${task.id}`, {task: container?.textContent})
        setEditedText(container.textContent)
          if (editedText){ //if text edited, display it 
            task.task = editedText
          }
        }
        }}>✍️</button>
      {/* button to mark as complete*/}
        <button onClick = {async () => {
          await axios.post("https://mariatens-todo-sql-backend.onrender.com/completed-tasks",
           {task:task.task,
            date: new Date().toLocaleDateString()})
            fetchTasks()
          await axios.delete(`https://mariatens-todo-sql-backend.onrender.com/tasks/${task.id}`)// do it in the backend code of posting to completed tasks
        //to keep them despite refreshes of the page do a fetch request here too
        // await axios.get("https://mariatens-todo-back-end.onrender.com/completed-tasks") // 
          fetchCompletedTasks()
        // // //   // document.getElementById(String(task.id))?.textContent,
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
