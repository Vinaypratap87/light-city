import React, { useState } from 'react'
import Sidebar from './componants/Sidebar'
import Post from './componants/Post'
import Rightbar from './componants/Rightbar'
import { data,data2 } from './Data'
import Nav from './componants/Nav'




const App = () => {
  const [bgColor, setbgColor] = useState("#232D3f")
  const [color, setColor] = useState("white")
  const [toggle, setToggle] = useState(true)
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const toggleButton =() =>{
    setToggle(!toggle)
    if(toggle){
      setbgColor("rgb(255,255,255)");
      setColor("black")
      document.querySelector("body").style.backgroundColor = "#cbc5c5"
    }else{
      setbgColor("#232D3f");
      setColor("white")
      document.querySelector("body").style.backgroundColor = "#000"
    }
  }

 const filterData = data.filter((item)=>item.userName.toLowerCase().includes(search.toLowerCase()))
  

  return (
    <>
    <Nav setSearch={setSearch} search={search} bgColor={bgColor} color={color} toggleButton=
    {toggleButton} toggle={toggle}/>
    <div className="container">
    <div className="side_bar">
    <Sidebar bgColor={bgColor} color={color}/>
    </div>
    <div className="post_section">
    {filterData.map((d) => (
       <Post key={d.id} data={d} bgColor={bgColor} color={color}/> 
    ))}
    
    
   
    </div>
    <div className="right_bar">
      {data2.map((d)=>
         <Rightbar setCity={setCity} key={d.id} data={d}
         bgColor={bgColor} color={color} />)}
   
    </div>
    </div>
    </>
  )
}

export default App
