import React, { Component } from 'react';
import Task from './Task';

var todoCounter = 3;
var tasksFilter = 'All';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {list: [
      {
        id: 1,
        text: 'water plants',
        status: 'active'
      },
      {
        id: 2,
        text: 'feed mammals',
        status: 'active'
      }
    ]};
  }

  handleAddTask() {
    let newList;
    newList = this.state.list.concat({
      id: todoCounter++,
      text: '',
      status: 'active'
    })
    this.setState({list: newList});
  }

  handleCompleteTask(taskId) {
    let newList = [...this.state.list];
    let taskIndex = newList.findIndex(task => task.id === taskId);
    newList[taskIndex] = {
        id: newList[taskIndex].id,
        text: newList[taskIndex].text,
        status: newList[taskIndex].status === 'active' ? 'completed' : 'active'
    };
    console.log(newList);
    console.log(this.state.list);
    this.setState({list: newList});
  }

  handleEditTask(taskId, newText) {
    let newList = [...this.state.list];
    let taskIndex = newList.findIndex(task => task.id === taskId);
    newList[taskIndex] = {
        id: newList[taskIndex].id,
        text: newText,
        status: newList[taskIndex].status
    };
    // console.log(newList);
    // console.log(this.state.list);
    this.setState({list: newList});
  }

  handleDeleteTask(taskId) {
    let newList;
    newList = this.state.list.filter(task => task.id !== taskId);
    this.setState({list: newList});
  }

  changeFilter(val) {
    tasksFilter = val;
    this.forceUpdate();
  }

  render() {
    let tasks;
    tasks = this.state.list.map(task => {
      console.log(tasksFilter);
      if (task.status === tasksFilter || tasksFilter === 'All') {
        return (
          <Task 
            key={task.id} 
            onCompleteToggle={this.handleCompleteTask.bind(this)} 
            onEdit={this.handleEditTask.bind(this)} 
            onDelete={this.handleDeleteTask.bind(this)} 
            task={task} 
          />
        );
      } else {return null}
    })
    
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="List col-12 col-md-9 col-lg-7 col-xl-6">
            <h4 className="text-center">Todo list</h4>
            <div className="btn-group d-flex btn-group-lg" role="group" aria-label="Basic example">
              <button type="button" 
                className={"btn btn-info w-100" + (tasksFilter === 'All' ? ' active' : '')} 
                onClick={this.changeFilter.bind(this, 'All')}>
                All
              </button>
              <button type="button" 
                className={"btn btn-info w-100" + (tasksFilter === 'active' ? ' active' : '')}
                onClick={this.changeFilter.bind(this, 'active')}>
                Active
              </button>
              <button type="button" 
                className={"btn btn-info w-100" + (tasksFilter === 'completed' ? ' active' : '')} 
                onClick={this.changeFilter.bind(this, 'completed')}>
                Completed
              </button>
            </div>
            <ul className="list-group">
              {tasks}
            </ul>
            <button type="button" className="btn btn-block btn-primary btn-lg" onClick={this.handleAddTask.bind(this)}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default List;