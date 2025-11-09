import React,{useState} from 'react'
import './Container.css'
import NavBar from './NavBar'
import Contents from './Contents'

function Container() {
    const [personaltoDoList, setpersonaltoDoList] = useState([]);
    const [familytoDoList, setfamilytoDoList] = useState([]);
    const [worktoDoList, setworktoDoList] = useState([]);
    const [activeCategory, setActiveCategory] = useState('personal'); // default = personal

  return (
    <div className="containerElement">
        <NavBar personaltoDoList= {personaltoDoList} setpersonaltoDoList={setpersonaltoDoList} familytoDoList={familytoDoList} worktoDoList={worktoDoList} setfamilytoDoList={setfamilytoDoList} setworktoDoList={setworktoDoList} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        <Contents personaltoDoList= {personaltoDoList} setpersonaltoDoList={setpersonaltoDoList} familytoDoList= {familytoDoList} worktoDoList={worktoDoList} setfamilytoDoList={setfamilytoDoList} setworktoDoList={setworktoDoList} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
    
    </div>
  )
}

export default Container
