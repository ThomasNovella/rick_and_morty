import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

function Nav ({onSearch}){
    return (
        <div>
          
          <header>
          <NavLink to='/about'>
            <p>About</p>
           </NavLink>
           <NavLink to='/home'>
            <p>Home</p>
            </NavLink>
            </header>
        <SearchBar
          onSearch={onSearch}
        />
      </div>
    )
}

export default Nav;