import React, { Component } from 'react';

class Task extends Component {
  completeTask(taskIdToComplete) {
    this.props.onComplete(taskIdToComplete)
  }

  deleteTask(taskIdToDelete) {
    this.props.onDelete(taskIdToDelete)
  }

  editTask(taskIdToEdit, event) {
    this.props.onEdit(taskIdToEdit, event.target.value)
  }
  
  render() {
    return (
      <li className="Task list-group-item">
        <div class="input-group">
          <input 
            type="text" 
            class="form-control" 
            value={this.props.task.text} 
            placeholder="new task"
            onChange={this.editTask.bind(this, this.props.task.id)}
          />
          <span class="input-group-btn">
            <a class="btn btn-secondary" onClick={this.completeTask.bind(this, this.props.task.id)} href='#'>
              <i class="fa fa-check" aria-hidden="true"></i>
            </a>
            <a class="btn btn-secondary" onClick={this.deleteTask.bind(this, this.props.task.id)} href='#'>
              <i class="fa fa-times" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </li>
    );
  }
}

export default Task;