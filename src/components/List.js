import React, { Component } from 'react';
import Task from './Task';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {list: [
      {
        id: 1,
        text: 'water plants'
      },
      {
        id: 2,
        text: 'feed mammals'
      }
    ]};
  }

  addTask() {
    let newState;
    newState = this.state.list.concat({
      id: this.state.list[this.state.list.length - 1].id + 1,
      text: 'new task'
    })
    console.log(newState);
    this.setState({list: newState});
  }

  EditTask() {
    let newState;
    newState = this.state;
    newState.list.filter(task => task.id === taskToEdit) = 
    console.log(newState);
    this.setState({list: newState});
  }

  deleteTask(taskToDelete) {
    let newState;
    newState = this.state.list.filter(task => task.id !== taskToDelete);
    this.setState({list: newState});
  }

  render() {
    let tasks;
    tasks = this.state.list.map(task => {
      return (
        <Task key={task.id} onDelete={this.deleteTask.bind(this)} task={task} />
      );
    })
    
    return (
      <div className="List">
        <ul>
          {tasks}
        </ul>
        <button onClick={this.addTask.bind(this)}>+</button>
      </div>
    );
  }
}

export default List;