
import"./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import reactLogo from "./assets/react.svg"
const App = () => {
  return (
    <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew/>
        <TodoData/>
        <div className="todo-image">
            <img src={reactLogo} className="logo"/>

        </div>
    </div>
  )
}

export default App
