import { Component, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactTextTransition, { presets } from "react-text-transition";
import config from '../../config/config';
require ('./welcome.scss');

const texts = ["Clever", "Shareable", "Fast"];

class Welcome extends Component{
    
    state = {
       
        textIndex: 0,
        textFastIndex: 0,
        paragraphIndex: 0
      };

      componentDidMount() {
        setInterval(() => {
            this.setState({
              
              textIndex: this.state.textIndex + 1,
              paragraphIndex: this.state.paragraphIndex + 1
            });
          }, 4000);
        setInterval(() => {
            this.setState({
              textFastIndex: this.state.textFastIndex + 1
            });
          }, 1500);
      }
      
         
   render(){
    return(
        <>
            
            <div className="welcome-container">
            <img className="background" src={`${config.imagesUrl}storage/site-images/welcome-image-2.jpg`} alt="..." />

            <div class="glass-container"><section className="inline">
            <section>
          
          <section className="inline">
           <h2 className="welcome-text text-center">This is a 
            <ReactTextTransition
              text={texts[this.state.textFastIndex % texts.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
              overflow
            />
            ShareShop</h2>
          </section>
        </section>
          </section></div>


            

               
            </div>
            <div className="d-flex justify-content-around mt-3">
                <div className="">
                    <NavLink to="/login">
                        <button className="btn btn-secondary">LogIn</button>
                    </NavLink>
                </div>
                <div className="">
                    <NavLink to="/register">
                        <button className="btn btn-secondary">Register</button>
                    </NavLink>
                </div>
                    
                </div>
            
            
        </>
    )    
   }
    
    
}

export default Welcome;