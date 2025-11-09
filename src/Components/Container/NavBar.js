import React,{ useState } from 'react'
import './Container'

function NavBar(props) {

  const [inputValue, setInputValue] = useState('');
  const { toDoList, setToDoList } = props;

  const handleAdd = () => {
    if (inputValue.trim() === '') return; // prevent empty todos

    const newTodo = {
      id: Date.now(), // unique ID
      text: inputValue
    };

    setToDoList([...toDoList, newTodo]); // add to the list
    setInputValue(''); // clear input
  };

  return (
    <div className="navBar">
        <div className="navBarInputItems">
            <h2>Menu</h2>
            <input
              type="text"
              placeholder="Add a new To-Do"
              className="todoInput"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} 
            />
        <button onClick={handleAdd} className="addButton">Add</button>
        </div>
      
    </div>
  )
}

export default NavBar
