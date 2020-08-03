import React from 'react';
import TodoForm from './components/TodoForm'
import './App.css'
import ParticlesBg from "particles-bg";
import {Route,Link} from 'react-router-dom'



 class App extends React.Component {
     constructor(){
    super();
    this.state={
      date: new Date().toLocaleString(),
      inputName:'',
      inputStyle:{
        border: 'none',
        padding:'20px',
        borderRadius: '10px',
        display:'flex'
      },
      buttonStyle:{
        padding:'20px',
        color:'white',
        fontSize:"20px",
        backgroundColor:'transparent',
        border:'none',
        borderRadius: '5px'

      },
      name:"React",
      
    
    }
   
    this.onClick=this.onClick.bind(this);
    this.onChange=this.onChange.bind(this);
  }
  
  
  onChange(e){
    this.setState({
      inputName:e.target.value,
      
    })
}
  onClick(e){
    e.preventDefault();
  
    this.setState({
      inputStyle:{
        display:'none'
      },
      buttonStyle:{
        display:'none'
      }
    })

  }
  render(){

return(
  <div>
    <div className="wrapper">
      <div>
     <Route 
     path="/">
       <h4>{this.state.date}</h4>
        <h1>{this.state.inputName}'s To-do List</h1>
        <input
        id="nameInput"
        type="text"
         style={this.state.inputStyle}
           value={this.state.inputName}
           placeholder="Whats your name?"
           onChange={this.onChange}
            />
              <button style={this.state.buttonStyle} onClick={this.onClick}><Link to='/form'>Enter</Link></button>
             
              </Route>
              </div>
            </div>
    

<Route path='/form'>
  <TodoForm  />
  </Route>
          {/*
"color"
"ball"
"lines"
"thick"
"circle"
"cobweb"
"polygon"
"square"
"tadpole"
"fountain"
"random"
"custom"
            */}
  {/* <ParticlesBg type="color"  bg={true}  />
*/}
  </div>
)
}
}
export default App;

