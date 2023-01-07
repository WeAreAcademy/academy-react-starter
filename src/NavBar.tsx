import { View } from "./App";

interface NavBarProps{
    setView: React.Dispatch<React.SetStateAction<View>>;
}


export function NavBar({setView}: NavBarProps): JSX.Element{
    return (
        <div className = "navbar">
        <button className = "navbar-btns" onClick ={()=> setView("CompletedTasks")}>Completed Tasks | </button>
        <button className = "navbar-btns" onClick ={()=> setView("TodoTasks")}>To Do Tasks</button>
        <h1 className="title" onClick ={()=> setView("TodoTasks")}> TO DO APP </h1>
        
        </div>
    )

}