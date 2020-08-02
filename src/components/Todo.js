import React from "react"
import './Todo.css'

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Todo (props){
    console.log(props)
   const tasks= props.tasks;
    
    return(
        <div className="list">
       
    <p>
        <input type="text"
            id={tasks.key}
       value= {tasks.text}

       onChange={(e)=>{
        props.setUpdate(e.target.value,tasks.key)}}
           
       
       />
    
    <span>
            <FontAwesomeIcon className="icon"
         icon="trash"

         onClick={() => props.deleteItem(tasks.key)}
         /></span>
    </p>
       
         

       
     
        </div>
    )
}

export default Todo;