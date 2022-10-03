import React, { Component } from 'react';
import NewTask from '../Components/NewTask';
import TaskList from '../Components/TaskList';
export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: {},
      allTasks: [{ title: 'John', description: 'Lopez', id: 1 }]
    };
  }
  render() {
    return (
      <main>
        <h3>Task</h3>
        <NewTask newTask={this.state.newTask} handleChange={() => {}} handleSubmit={() => {}} />
        <TaskList allTasks={this.state.allTasks} handleDelete={() => {}} />
      </main>
    );
  }
}
