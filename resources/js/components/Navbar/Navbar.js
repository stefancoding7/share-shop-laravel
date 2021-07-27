import React from 'react';
import './navbar.scss';
import { HiShoppingCart } from 'react-icons/hi';
import { TiThMenuOutline } from "react-icons/ti";
import { GiFoldedPaper, GiSettingsKnobs } from 'react-icons/gi';
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
            <div className="offcanvas-body small">
                <div className="d-flex justify-content-around" >
                    
                        <NavLink to="/">
                            <button type="button" className="btn btn-secondary btn-lg" data-bs-dismiss="offcanvas" aria-label="Close"><p><span><GiFoldedPaper/>  Shop Lists</span></p></button>
                        </NavLink>
                   
                   
                        <button type="button" class="btn btn-secondary btn-lg"><GiSettingsKnobs/> Settings</button>
                    
                
                
                </div>
            </div>
        </div>
      </>  
    )
       
    
}

export default Navbar;