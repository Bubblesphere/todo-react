import React from 'react';
import './App.css';
import uuid from 'uuid/v4';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "test",
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

  addTodo = (todo) => {
    todo = {id:3, description:"test", dateAdded: new Date()};
    this.setState((state, props) => ({
      current: "",
      todos: [...state.todos, { 
        id: uuid(), 
        description: state.current, 
        done: false
      }]
    }));
  }

  handleCurrent = (e) => {
    const value = e.target.value;
    this.setState((state, props) => ({
      current: value
    }));
  }

  render() {
    return <div>
      <input type="text" value={this.state.current} onChange={this.handleCurrent}/>
      <button onClick={this.addTodo}>Add</button>
      <ul>  
      {
        this.state.todos.map(t => 
          <li key={t.id}>
            {t.description}
            <button data-id={t.id} onClick={this.removeTodo}>X</button>
          </li>
        )
      }  
      </ul>
    </div>
  }
}

export default Todo;
