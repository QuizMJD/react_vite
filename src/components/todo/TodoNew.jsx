import {useRef, useState} from "react";
const TodoNew=(props)=>{
    const [valueInput,setValueInput]=useState("");
    const {addNewTodo}=props


    const handClick=()=>{
        addNewTodo(valueInput)
    }
    const handChage=(name)=>{
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <input type="text"
            onChange={(event)=>handChage(event.target.value)}
            />
            <button style={{cursor:"pointer"}} onClick={handClick}>Add</button>
            <div>
                My text input is = {valueInput}
            </div>


        </div>
    )
}
export default TodoNew;