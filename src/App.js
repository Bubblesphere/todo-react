import React from 'react';
import uuid from 'uuid/v4';
import Typography from '@material-ui/core/Typography';
import TodoAdder from './TodoAdder';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.styles = {
      marginTop: "16px"
    }
  }

  addTodo = value => {
    this.setState((state, props) => ({
      todos: [...state.todos, { 
        id: uuid(), 
        description: value, 
        done: false
      }]
    }));
  }

  removeTodo = id => {
    const targetIndex = this.state.todos.findIndex(x => x.id === id);
    this.setState((state, props) => ({
      todos: [...state.todos.slice(0, targetIndex), ...state.todos.slice(targetIndex + 1)]
    }));
  }

  toggleTodo = id => {
    this.setState((state, props) => ({
      todos: state.todos.map(x => x.id === id ? {...x, done: !x.done} : x)
    }));
  }

  render() {
    return <div style={this.styles}>
      <Typography variant="h3" component="h1" gutterBottom>Todos</Typography>
      <TodoAdder onAdd={this.addTodo} />
      <TodoList todos={this.state.todos} onRemove={this.removeTodo} onToggle={this.toggleTodo} />
    </div>
  }
} 

export default App;

