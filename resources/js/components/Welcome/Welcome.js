import { Component, useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
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
     const { loggedIn } = this.props.context;
     
    return(
        <>
            { !loggedIn ?
            <>
              <div className="welcome-container">
            <img className="background img-fluid" src="https://images.unsplash.com/photo-1588821323157-9fc67e64659c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="..." />

            <div class="glass-container"><section className="inline">
            <section>
          
          <section className="inline">
           <h2 className="welcome-text text-center">This is a 

           <dic className="text-box">
            <ReactTextTransition
                text={texts[this.state.textFastIndex % texts.length]}
                springConfig={presets.gentle}
                style={{ margin: "0 4px" }}
                inline
                overflow
              />
           </dic>
           
            ShareShop</h2>
          </section>
        </section>
          </section></div>


            

               
            </div>
            <div className="d-flex justify-content-around mt-4">
            <h2><NavLink to="/login" className="shadow p-2 create-button rounded-pill">Create</NavLink> my first Shop List</h2>
                 
                
                    
                </div>
              </>
            :

            <Redirect to="/shoplists" />

            
            }
           
            
        </>
    )    
   }
    
    
}

export default Welcome;