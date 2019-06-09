import React from 'react';
import './styles/Todo.scss';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TodoItem = props => 
  <li className="todo" key={props.id}>
    <FormControlLabel
      control={
        <Checkbox
          checked={props.done}
          onChange={props.toggle}
          value={props.id}
          />
      }
      className={`todo_description ${props.done && "todo_description--done"}`}
      label={props.description}
      labelPlacement="end"/>
    <Button 
      size="small"
      value={props.id}
      onClick={props.remove}>
      X
    </Button>
  </li>

export default TodoItem;