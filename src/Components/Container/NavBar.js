import React, { useState } from 'react';
import './Container.css';

function NavBar(props) {
  const [inputValue, setInputValue] = useState('');

  const { 
    personaltoDoList, 
    setpersonaltoDoList, 
    familytoDoList, 
    worktoDoList, 
    setfamilytoDoList, 
    setworktoDoList, 
    activeCategory, 
    setActiveCategory
  } = props;

  const handleAdd = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue
    };

    if (activeCategory === 'personal') {
      setpersonaltoDoList([...personaltoDoList, newTodo]);
    } else if (activeCategory === 'family') {
      setfamilytoDoList([...familytoDoList, newTodo]);
    } else if (activeCategory === 'work') {
      setworktoDoList([...worktoDoList, newTodo]);
    }

    setInputValue('');
  };

  return (
    <div className="navBar">
      <div className="navBarInputItems">
        <h2>Menu</h2>
        <input
          type="text"
          placeholder={`Add a new ${activeCategory} To-Do`}
          className="todoInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd} className="addButton">Add</button>
      </div>

      <div 
        className={`ToDoButtons ${activeCategory === 'personal' ? 'active' : ''}`} 
        onClick={() => setActiveCategory('personal')}
      >
        <p>Personal</p>
        <span className="ToDoCount">{personaltoDoList.length}</span>
      </div>

      <div 
        className={`ToDoButtons ${activeCategory === 'family' ? 'active' : ''}`} 
        onClick={() => setActiveCategory('family')}
      >
        <p>Family</p>
        <span className="ToDoCount">{familytoDoList.length}</span>
      </div>

      <div 
        className={`ToDoButtons ${activeCategory === 'work' ? 'active' : ''}`} 
        onClick={() => setActiveCategory('work')}
      >
        <p>Work</p>
        <span className="ToDoCount">{worktoDoList.length}</span>
      </div>
    </div>
  );
}

export default NavBar;
