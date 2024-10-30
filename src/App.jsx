
import"./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import reactLogo from "./assets/react.svg"
import {useState} from "react";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";

const App = () => {
    const [todoList,setTodoList]=useState([
    ])

    const addNewTodo=(name)=>{
        const newTodo={
            id:randomIntFromInterval(1,9999999),
            name:name,
        }
        setTodoList([...todoList,newTodo])
    }
    const deleteTodo=(id)=>{
        const newTodo=todoList.filter(item=>item.id !==id)
        setTodoList(newTodo)

    }

    const randomIntFromInterval=(min, max) =>{ // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (

        <>
            <Header/>
            <div className="todo-container">
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
            </div>
            <Footer/>
        </>

    )
}

export default App
