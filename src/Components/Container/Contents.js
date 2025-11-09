import React from 'react'
import './Container'

function Contents(props) {
  const { toDoList, setToDoList } = props;
  return (
    <div>
        <h2 className='contents'>
            To Do . .
        </h2>
    </div>
  )
}

export default Contents
