import React from 'react';
// messing around n stuff
function Task({ task, onDelete }) {
  return (
    <li>
      {task}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Task;

