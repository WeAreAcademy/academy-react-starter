import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from "./NavBar";
import { Input } from "./Input";

interface ITask {
  task: string;
  id: number;
  time: Date;
}
export type View = "TodoTasks" | "CompletedTasks";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [editedText, setEditedText] = useState<string>();
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);
  const [contentEditable, setContentEditable] = useState(false);
  const [view, setView] = useState<View>("TodoTasks");

  const fetchTasks = async () => {
    const response = await fetch(
      "https://mariatens-todo-sql-backend.onrender.com/tasks"
    );
    const jsonBody = await response.json();
    setTasks(jsonBody);
  };
  useEffect(() => {
    fetchTasks();
  }, [completedTasks]);
  const fetchCompletedTasks = async () => {
    const response = await fetch(
      "https://mariatens-todo-sql-backend.onrender.com/completed-tasks"
    );
    const jsonBody = await response.json();
    setCompletedTasks(jsonBody);
  };
  useEffect(() => {
    fetchCompletedTasks();
  }, []);
  const handleToDoInput = (toDoInput: string) => {
    setInput(toDoInput);
  };
  const handleEnter = async () => {
    await axios.post("https://mariatens-todo-sql-backend.onrender.com/tasks", {
      task: input,
      time: new Date().toISOString().substring(1, 10),
    });
    await fetchTasks();
    setInput("");
  };
  if (view === "TodoTasks") {
    return (
      <>
        <NavBar setView={setView} />
        <Input handleEnter={handleEnter} handleToDoInput={handleToDoInput} input={input}/>
        <div className="task-ctn">
          {/* saved todos */}
          {tasks &&
            tasks.map((task) => (
              <div className="task" key={task.id}>
                <div
                  className="task-txt"
                  id={String(task.id)}
                  contentEditable={contentEditable}
                >
                  {task.task}
                </div>
                <div className="btn-ctn">
                  <small className="time"> {task.time}</small>
                  {/* button to delete */}
                  <button
                    className="del-btn"
                    onClick={async () => {
                      await axios.delete(
                        `https://mariatens-todo-sql-backend.onrender.com/tasks/${task.id}`
                      );
                      fetchTasks();
                    }}
                  >
                    🗑️
                  </button>
                  {/* button to change  */}
                  <button
                    onClick={async () => {
                      setContentEditable(!contentEditable);
                      const container = document.getElementById(
                        String(task.id)
                      );
                      if (container?.textContent) {
                        await axios.patch(
                          `https://mariatens-todo-sql-backend.onrender.com/tasks/${task.id}`,
                          { task: container?.textContent }
                        );
                        setEditedText(container.textContent);
                        if (editedText) {
                          //if text edited, display it
                          task.task = editedText;
                        }
                      }
                    }}
                  >
                    ✍️
                  </button>
                  {/* button to mark as complete*/}
                  <button
                    onClick={async () => {
                      await axios.post(
                        "https://mariatens-todo-sql-backend.onrender.com/completed-tasks",
                        {
                          task: task.task,
                          time: new Date().toISOString().substring(1, 10),
                        }
                      );
                      fetchTasks();
                      await axios.delete(
                        `https://mariatens-todo-sql-backend.onrender.com/tasks/${task.id}`
                      );
                      fetchCompletedTasks();
                    }}
                  >
                    ✔️
                  </button>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <NavBar setView={setView} />
        <Input handleEnter={handleEnter} handleToDoInput={handleToDoInput} input={input}/>
        <h2 className="title">Completed tasks</h2>
        <div className="task-ctn">
          {completedTasks.map((compTask) => (
            <div className="task" key={compTask.id}>
              <div>
                <s>{compTask.task}</s>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default App;
