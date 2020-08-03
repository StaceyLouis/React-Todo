// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from './Todo'
import '../styles/TodoList.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function TodoList(props){
    console.log(props)
    const tasks= props.tasks;
    console.log(tasks)
    const listItems = tasks.map(item => 
        {
            return  <div className="list" key={item.key} 
            >
          <p>
              <Todo date={props.date} tasks={item} deleteItem={props.deleteItem} setUpdate={props.setUpdate}/>
            
            

          </p>
          
          
         </div>
         } )
        
    return( 
        <>
  {listItems}


    </>
    )
}

export default TodoList