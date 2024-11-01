import {useState} from "react";
import TodoNew from "./TodoNew.jsx";
import TodoData from "./TodoData.jsx";
import reactLogo from "../../assets/react.svg";
import App from "../../App.jsx";

const TodoApp=()=>{

    const [todoList, setTodoList] = useState([])

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 9999999),
            name: name,
        }
        setTodoList([...todoList, newTodo])
    }
    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo)

    }

    const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return (<div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew
            addNewTodo={addNewTodo}
        />
        {todoList.length > 0 ? <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
        /> : <div className="todo-image">
            <img src={reactLogo} className="logo"/>
        </div>}
    </div>)
}
export default TodoApp;