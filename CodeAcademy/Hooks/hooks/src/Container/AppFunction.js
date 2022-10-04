import { useState } from 'react';
import NewTask from '../Components/NewTask';
import TaskList from '../Components/TaskList';

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  const handleDelete = (taskIdRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdRemove));
  };
  return (
    <main>
      <h1> Task Functional</h1>
      <NewTask newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TaskList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
