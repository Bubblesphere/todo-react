import React from 'react';
import './App.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Do laundry",
          done: false
        },
        {
          id: 2,
          description: "Do dishes",
          done: false
        }
      ]
    }
  }

  render() {
    return <ul>  
      {
        this.state.todos.map(t => 
          <li key={t.id}>
            {t.description}
          </li>
        )
      }  
    </ul>
  }
}

export default Todo;
