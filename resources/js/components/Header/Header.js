import React from 'react';
import './header.scss';
import { HiShoppingCart } from 'react-icons/hi';
import { TiThMenuOutline } from "react-icons/ti";
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(
        <>
        <nav className="navbar navbar-light">
            <div className="container-fluid">
            <NavLink className="navbar-brand" to="/about">
            <span className="nav-icon">
                
                <h3 className=""> <HiShoppingCart /> <span className="s-letter">S</span>hare<span className="s-letter">S</span>hop</h3> 
            </span>
               
               
            
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                <TiThMenuOutline />
            </button>
            </div>
        </nav>
      </>  
    )
       
    
}

export default Header;