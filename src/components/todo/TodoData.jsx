const TodoData = (props) => {
    // console.log(">>>>>",props);
    // const {name,age,obj,todoList}=props;



    return (
        <div className="todo-data">
            {/*<div>My name is: {name}</div>*/}
            <div>age is: {props.obj.name}</div>
            <div>Learn reactjs</div>
            <div>Watching youtube</div>
            <div>
                {JSON.stringify(props.todoList)}

            </div>
        </div>
    )

}
export default TodoData ;