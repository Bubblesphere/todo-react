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
          id: uuid(),
          description: "Do laundry",
          done: false
        },
        {
          id: uuid(),
          description: "Do dishes",
          done: true
        }
      ]
    }
  }

  removeTodo = (e) => {
    const targetId = e.target.dataset.id;
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

  toggleTodo = (e) => {
    const targetId = Number(e.target.dataset.id);
    this.setState((state, props) => ({
      todos: state.todos.map(x => x.id === targetId ? {...x, done: !x.done} : x)
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
            <input type="checkbox" data-id={t.id}  checked={t.done} onChange={this.toggleTodo}/> 
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