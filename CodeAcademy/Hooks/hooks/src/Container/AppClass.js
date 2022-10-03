import React, { Component } from 'react';
export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: {},
      allTasks: []
    };
  }
  render() {
    return (
      <main>
        <h3>Task</h3>
      </main>
    );
  }
}
