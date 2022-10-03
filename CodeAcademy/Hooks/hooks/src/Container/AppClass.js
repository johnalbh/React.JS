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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((prevState) => ({
      ...prevState,
      newTask: {
        ...prevState.newTask,
        [name]: value,
        id: Date.now()
      }
    }));
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.newTask.title) return;
    this.setState((prevState) => ({
      allTasks: [prevState.newTask, ...prevState.allTasks],
      newTask: {}
    }));
  }
  handleDelete(taskIdRemove) {
    this.setState((prevState) => ({
      ...prevState,
      allTasks: prevState.allTasks.filter((task) => task.id !== taskIdRemove)
    }));
  }

  render() {
    return (
      <main>
        <h3>Task</h3>
        <NewTask newTask={this.state.newTask} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <TaskList allTasks={this.state.allTasks} handleDelete={this.handleDelete} />
      </main>
    );
  }
}
