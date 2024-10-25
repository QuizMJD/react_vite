
const TodoNew=(props)=>{
    console.log(">>>",props)
    const {addNewTodo}=props;
    // addNewTodo(name)
    const handClick=()=>{
        alert("click me")
    }
    const handChage=(name)=>{
        console.log(">>>hand on change",name)
    }

    return (
        <div className="todo-new">
            <input type="text"
            onChange={(event)=>handChage(event.target.value)}
            />
            <button style={{cursor:"pointer"}} onClick={handClick}>Add</button>


        </div>
    )
}
export default TodoNew;