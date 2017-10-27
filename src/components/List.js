import React, { Component } from 'react';
import Task from './Task';

var todoCounter = 3;

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
    let newList;
    newList = this.state.list.concat({
      id: todoCounter++,
      text: ''
    })
    console.log(newList);
    this.setState({list: newList});
  }

  editTask(taskIdToEdit, text) {
    let newList;
    newList = this.state.list;
    newList.forEach((task) => {
      if (task.id === taskIdToEdit) {
        task.text = text;
      }
    })
    console.log(this.state);
    console.log(newList);
    this.setState({list: newList});
  }

  deleteTask(taskIdToDelete) {
    let newList;
    newList = this.state.list.filter(task => task.id !== taskIdToDelete);
    this.setState({list: newList});
  }

  render() {
    let tasks;
    tasks = this.state.list.map(task => {
      return (
        <Task 
          key={task.id} 
          onEdit={this.editTask.bind(this)} 
          onDelete={this.deleteTask.bind(this)} 
          task={task} 
        />
      );
    })
    
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="List col-lg-6">
            <ul className="list-group">
              {tasks}
            </ul>
            <button type="button" className="btn btn-block" onClick={this.addTask.bind(this)}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default List;