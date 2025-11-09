import React,{useState} from 'react'
import './Container.css'
import NavBar from './NavBar'
import Contents from './Contents'

function Container() {
    const [toDoList, setToDoList] = useState([]);

  return (
    <div className="containerElement">
        <NavBar toDoList= {toDoList} setToDoList={setToDoList} />
        <Contents toDoList= {toDoList} setToDoList={setToDoList}/>
    
    </div>
  )
}

export default Container
