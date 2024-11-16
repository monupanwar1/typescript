export interface TodoType{
    title:string,
    description:string,
    done:boolean,
}


interface TodoInput{
    todo:TodoType
}


function Todo({todo}:TodoInput){
    return(
        <div style={{border:"1px solid red ",padding:"10px" ,margin:"10px"}}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>

            <p>
                <strong>status:</strong> {todo.done ? "completed":"notcompleted"}
            </p>

        </div>

    )
}


export default Todo;