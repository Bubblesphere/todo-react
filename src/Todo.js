import React from 'react';

const Todo = (props) => 
  <li key={props.id}>
    <input 
      type="checkbox" 
      data-id={props.id}  
      checked={props.done} 
      onChange={props.toggle}
      /> 
    {props.description}
    <button 
      data-id={props.id} 
      onClick={props.remove}>X</button>
  </li>

export default Todo;