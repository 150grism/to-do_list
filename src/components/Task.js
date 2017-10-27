import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {completed: false};
  }

  completeTaskToggle() {
    // this.props.onComplete(taskIdToComplete)
    this.setState({completed: !this.state.completed});
  }

  deleteTask(taskIdToDelete) {
    this.props.onDelete(taskIdToDelete)
  }

  editTask(taskIdToEdit, event) {
    this.props.onEdit(taskIdToEdit, event.target.value)
  }
  
  render() { 
    return (
      <li className={"Task list-group-item" + (this.state.completed ? ' list-group-item-success' : '')}>
        <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            value={this.props.task.text} 
            placeholder="new task"
            onChange={this.editTask.bind(this, this.props.task.id)}
            disabled={this.state.completed}
          />
          <span className="input-group-btn">
            <button type="button" 
              className={"btn btn-success" + (this.state.completed ? ' darkGreenButton' : '')} 
              onClick={this.completeTaskToggle.bind(this, this.props.task.id)}>
              <i className="fa fa-check" aria-hidden="true"></i>
            </button>
            <button type="button" className="btn btn-danger" onClick={this.deleteTask.bind(this, this.props.task.id)}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </span>
        </div>
      </li>
    );
  }
}

export default Task;