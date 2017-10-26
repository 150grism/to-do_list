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
      <li className="Task">
        <input 
          type='text' 
          value={this.props.task.text} 
          onChange={this.editTask.bind(this, this.props.task.id)}
        />
        <a onClick={this.completeTask.bind(this, this.props.task.id)} href='#'>V</a>
        <a onClick={this.deleteTask.bind(this, this.props.task.id)} href='#'>X</a>
      </li>
    );
  }
}

export default Task;