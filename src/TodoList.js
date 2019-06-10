import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      listStyleType: "none",
      textAlign: "center",
      minWidth: "500px",
      paddingLeft: "0"
    }
    this.itemStyles = {
      padding: "16px 0",
      borderBottom: "1px solid #ddd",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }
  }

  itemDescriptionStyles = done => {
    const base = { cursor: "pointer" }
    if (done) {
      return {
        ...base,
        textDecoration: "line-through",
        opacity: 0.4,
      }
    }
    return base;
  }

  onRemove = e => {
    const targetId = e.currentTarget.value;
    this.props.onRemove(targetId);
  }

  onToggle = e => {
    const targetId = e.target.value;
    this.props.onToggle(targetId);
  }

  render() {
    return <ul style={this.styles}>  
      {
        this.props.todos.map(todo => 
          <li style={this.itemStyles} key={this.props.id}>
            <FormControlLabel
              control={
                <Checkbox checked={todo.done} onChange={this.onToggle} value={todo.id} />
              }
              style={this.itemDescriptionStyles(todo.done)}
              label={todo.description}
              labelPlacement="end"/>
            <Button size="small" value={todo.id} onClick={this.onRemove}>X</Button>
          </li>
        )
      }
    </ul>
  }
}

export default TodoList;