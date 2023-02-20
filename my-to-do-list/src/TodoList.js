import React, { useState } from 'react';
import Task from './Task';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleChange} placeholder="Add new task..." />
        <button type="submit">Add</button>
      </form>
      <ul id="task-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={() => deleteTask(task.id)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
