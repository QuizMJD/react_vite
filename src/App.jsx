
import"./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import reactLogo from "./assets/react.svg"
import {useState} from "react";
const App = () => {
    const [todoList,setTodoList]=useState([
        // {id:1,name:"learn reactjs"},
        // {id:2,name:"watching youtube"}
    ])

    const addNewTodo=(name)=>{
        const newTodo={
            id:randomIntFromInterval(1,9999999),
            name:name,
        }
        setTodoList([...todoList,newTodo])
    }
    const randomIntFromInterval=(min, max) =>{ // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }



    return (
    <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew
        addNewTodo={addNewTodo}
        />
        <TodoData
        todoList={todoList}
        />
        <div className="todo-image">
            <img src={reactLogo} className="logo"/>

        </div>
    </div>
  )
}

export default App
