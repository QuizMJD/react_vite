const TodoData = ({obj}) => {
    // console.log(">>>>>",props);
    // const {name,age}=props;

    return (
        <div className="todo-data">
            {/*<div>My name is: {name}</div>*/}
            <div>age is: {obj.name}</div>
            <div>Learn reactjs</div>
            <div>Watching youtube</div>
        </div>
    )

}
export default TodoData ;