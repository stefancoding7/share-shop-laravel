import React from 'react';
import './navbar.scss';
import { HiShoppingCart } from 'react-icons/hi';
import { TiThMenuOutline } from "react-icons/ti";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

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
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body small">
                <div class="btn-group btn-group" role="group" aria-label="...">
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-secondary">Secondary</button>
                </div>
            </div>
        </div>
      </>  
    )
       
    
}

export default Navbar;