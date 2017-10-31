import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {completed: false};
  }

  completeTaskToggle(taskId) {
    // this.props.onComplete(taskId)
    this.setState({completed: !this.state.completed});
    this.props.onCompleteToggle(taskId);
  }

  deleteTask(taskId) {
    this.props.onDelete(taskId);
  }

  editTask(taskId, event) {
    this.props.onEdit(taskId, event.target.value);
  }
  
  render() { 
    let val = this.state.completed ? (this.props.task.text ? this.props.task.text : 'new task') : this.props.task.text;
    return (
      <li className={"Task list-group-item" + (this.state.completed ? ' list-group-item-success' : '')}>
        <div className="input-group">
          <input 
            type="text" 
            className="form-control text-truncate" 
            value={val}
            placeholder="new task"
            onChange={this.editTask.bind(this, this.props.task.id)}
            disabled={this.state.completed}
          />
          <span className="input-group-btn">
            <button type="button" 
              className={"btn btn-success" + (this.props.task.status === 'completed' ? ' completedTaskCompleteButton' : '')} 
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