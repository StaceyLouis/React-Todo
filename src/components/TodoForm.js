import React from 'react'
import '../styles/form.css'
import TodoList from './TodoList'
import{library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            array:[],
            task:{
                text:'',
                key:''
            }
        }
    
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.setUpdate = this.setUpdate.bind(this);

      }

      onChange(e){
          this.setState({
              task:{
                  text:e.target.value,
                  key:Date.now()
              }
          })
      }
    onSubmit(e){
        e.preventDefault();
        const newTask=this.state.task;
        if(newTask.text !==""){
            const tasks = [...this.state.array, newTask];
            this.setState({
                array:tasks,
                task:{
                    text:'',
                    key:''
                }
            })
        }
    }
    setUpdate(text,key){
        const items = this.state.array;
        items.map(item=>{      
          if(item.key === key){
            item.text= text;
          }
        })
        this.setState({
          array: items
        })
        
       
      }  

    onDelete(key){
        const filteredItems= this.state.array.filter(item =>
          item.key!==key);
        this.setState({
          array: filteredItems
        })
    
      }
    render(){
        return(
            <div className="app">
                <header>
                <form id="to-do-form" onSubmit={this.onSubmit}>
            <input 
            type="text" 
            placeholder="Enter task here"
            value={this.state.task.text}
            onChange={this.onChange}
            />
                <button>Add</button>
                </form>
                
                </header>
      
                <TodoList tasks={this.state.array} 
                deleteItem={this.onDelete}
                setUpdate={this.setUpdate}
                />
            </div>
        )
    }
}

export default TodoForm;