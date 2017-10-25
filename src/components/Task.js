import React, { Component } from 'react';

class Task extends Component {
  deleteTask(taskToDelete) {
    this.props.onDelete(taskToDelete)
  }
  
  render() {
    return (
      <li className="Task">
        {this.props.task.text} <a onClick={this.deleteTask.bind(this, this.props.task.id)} href='#'>X</a>
      </li>
    );
  }
}

export default Task;
