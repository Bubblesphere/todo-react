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

  removeTodo = (e) => {
    const targetId = Number(e.target.dataset.id);
    const targetIndex = this.state.todos.findIndex(x => x.id === targetId);
    this.setState((state, props) => ({
      todos: [...state.todos.slice(0, targetIndex), ...state.todos.slice(targetIndex + 1)]
    }));
  }

  render() {
    return <ul>  
      {
        this.state.todos.map(t => 
          <li key={t.id}>
            {t.description}
            <button data-id={t.id} onClick={this.removeTodo}>X</button>
          </li>
        )
      }  
    </ul>
  }
}

export default Todo;
