import React from 'react';
import './Container.css';

function Contents(props) {
  const { 
    personaltoDoList, 
    setpersonaltoDoList, 
    familytoDoList, 
    worktoDoList, 
    setfamilytoDoList, 
    setworktoDoList,
    activeCategory
  } = props;

  // Determine which list to display and which setter to use
  let currentList, setCurrentList;

  if (activeCategory === 'personal') {
    currentList = personaltoDoList;
    setCurrentList = setpersonaltoDoList;
  } else if (activeCategory === 'family') {
    currentList = familytoDoList;
    setCurrentList = setfamilytoDoList;
  } else if (activeCategory === 'work') {
    currentList = worktoDoList;
    setCurrentList = setworktoDoList;
  }

  const handleDelete = (id) => {
    setCurrentList(currentList.filter(todo => todo.id !== id));
  };

  return (
    <div className="contents">
      <h2>{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} To-Dos</h2>
      <div className="todoContainer">
        {currentList.length === 0 ? (
          <p className='placeHolder'>No To-Dos yet!</p>
        ) : (
          currentList.map((todo) => (
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
