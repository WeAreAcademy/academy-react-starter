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

  return (<>
    <h1 className="title"> TO DO APP </h1>
    <input placeholder="Write your task here"
      value={input}
      onChange={(event) => { handleToDoInput(event.target.value) }}></input>
    <button onClick={() => axios.post("https://mariatens-todo-back-end.onrender.com", { task: input })}>+</button>

    <p>Delete the task by clicking on them</p>
    {/* saved todos */}
    {tasks && tasks.map(task => 
    <ul key={task.id}>
      <li><button key={task.id} 
      onClick={() => { 
      removeTask(task);
      axios.delete(`https://mariatens-todo-back-end.onrender.com/${task.id}`) 
      }
      }>{task.task}</button></li></ul>)}

  </>)
}

export default App;
