import {useRef, useState} from "react";
const TodoNew=(props)=>{
    const [valueInput,setValueInput]=useState("hello");
    const {addNewTodo}=props


    const handClick=()=>{
        addNewTodo(valueInput)
        setValueInput("");
    }
    const handChage=(name)=>{
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <input type="text"
            onChange={(event)=>handChage(event.target.value)}
                   value={valueInput}
            />
            <button style={{cursor:"pointer"}} onClick={handClick}>Add</button>
            <div>
                My text input is = {valueInput}
            </div>


        </div>
    )
}
export default TodoNew;