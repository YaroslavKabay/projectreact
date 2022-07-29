import {useEffect,useState} from "react"

import TodoComponent from "./TodoComponent"
import {getTodos} from "../services"

export  function TodosComponent(){
    let [todos,setTodos] = useState([]);

    useEffect( () =>{
        getTodos.then((value)=> setTodos([...value]))
    },[]);


    return (
        <div>
            {
                todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)
            }
        </div>
    );
}