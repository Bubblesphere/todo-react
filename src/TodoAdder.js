import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class TodoAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "test"
    }
    this.textfieldStyles = {
      flexGrow: 1
    }
    this.styles = {
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between"
    }
  }

  onValueChanged = e => {
    const value = e.target.value;
    this.setState((state, props) => ({
      value: value
    }));
  }

  onAdd = e => {
    this.props.onAdd(this.state.value);
    this.setState((state, props) => ({
      value: ""
    }));
  }

  render() {
    return <div style={this.styles}>
      <TextField
        style={this.textfieldStyles}
        label="Todo"
        margin="normal"
        value={this.state.value}
        onChange={this.onValueChanged}
      />
      <Button 
          onClick={this.onAdd}
          color="primary"
          variant="contained"
        >
        Add
      </Button>
    </div>
  }
}
      