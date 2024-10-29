
const TodoData = (props) => {
     const {todoList,deleteTodo}=props;

    const deleteClick=(id)=> {
        deleteTodo(id)

    }
     return (
        <div className="todo-data">
            {todoList.map((item,index)=>{
                return(
                    <div className={`todo-item ${index}`} key={item.id} >
                        <div>{item.name}</div>
                        <button onClick={()=>deleteClick(item.id)}  >Delete</button>
                    </div>)
            })}
            <div>

            </div>
        </div>
    )

}
export default TodoData ;