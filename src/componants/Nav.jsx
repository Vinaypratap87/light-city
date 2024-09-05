import React from 'react'
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";

const Nav = ({data, bgColor, color, toggleButton, toggle, setSearch, search }) => {
  const bgcolor = color == "black" ? "#cbc5c5" : "black"
  return (
    <>
      <div className="right_container">
        <div className="nav_bar"
          style={{
            backgroundColor: `${bgcolor}`
          }}
        >
          <div className="logo" style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
            WDM
            <div onClick={toggleButton}>{toggle ? (<BsToggleOn />) : (<BsToggleOff />)}  {" "}</div>
            <div>
            </div>
          </div>
          <div className="searchBox" 
            style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
              <input className='search' type="text" value={search} onChange={(e)=>setSearch(e.target.value) } />
            <div className="right"> <button className='icons' onClick={()=>setSearch("") }>Clear</button></div>
          </div>
          <div className="seller" style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>Become a seller</div>
        </div>
      </div>
    </>
  )
}

export default Nav
