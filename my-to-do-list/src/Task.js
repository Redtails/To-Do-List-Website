import React from 'react';

function Task({ task, onDelete }) {
  return (
    <li>
      {task}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Task;

