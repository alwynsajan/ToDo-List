import React from 'react';
import './Container.css';

function Contents({ toDoList, setToDoList }) {

  const handleDelete = (id) => {
    setToDoList(toDoList.filter(todo => todo.id !== id));
  };

  return (
    <div className="contents">
      <h2>To Do List</h2>
      <div className="todoContainer">
        {toDoList.length === 0 ? (
          <p className='placeHolder'>No To-Dos yet!</p>
        ) : (
          toDoList.map((todo) => (
            <div key={todo.id} className="todoBox">
              <input type="checkbox" className="todoCheckbox" />
              <span className="todoText">{todo.text}</span>
              <button className="deleteButton" onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Contents;
