import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ()=> {
    return (
        <nav>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/weather" activeClassName="active">Weather</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink> 
      </nav>
    )
}

export default Header;
