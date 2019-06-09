import React from 'react';
import './styles/TodoApp.scss';
import uuid from 'uuid/v4';
import Todo from './TodoItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoDescription: "test",
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

  removeTodo = e => {
    const targetId = e.currentTarget.value;
    const targetIndex = this.state.todos.findIndex(x => x.id === targetId);
    this.setState((state, props) => ({
      todos: [...state.todos.slice(0, targetIndex), ...state.todos.slice(targetIndex + 1)]
    }));
  }

  addTodo = () => {
    this.setState((state, props) => ({
      newTodoDescription: "",
      todos: [...state.todos, { 
        id: uuid(), 
        description: state.newTodoDescription, 
        done: false
      }]
    }));
  }

  handleNewTodoDescription = e => {
    const value = e.target.value;
    this.setState((state, props) => ({
      newTodoDescription: value
    }));
  }

  toggleTodo = e => {
    console.log(e.target);
    const targetId = e.target.value;
    this.setState((state, props) => ({
      todos: state.todos.map(x => x.id === targetId ? {...x, done: !x.done} : x)
    }));
  }

  render() {
    return <div class="app">
      <Typography variant="h3" component="h1" gutterBottom>
        Todos
      </Typography>

      <div class="add-todo" >
        <TextField
          className={"add-todo_textfield"}
          id="outlined-name"
          label="Todo"
          value={this.state.newTodoDescription}
          onChange={this.handleNewTodoDescription}
          margin="normal"
        />
        <Button 
            onClick={this.addTodo}
            color="primary"
            variant="contained"
          >
          Add
        </Button>
      </div>


      <ul id="todo-list">  
        {
          this.state.todos.map(todo => 
            <Todo {...todo} toggle={this.toggleTodo} remove={this.removeTodo} />
          )
        }
      </ul>
    </div>
  }
}

export default TodoList;