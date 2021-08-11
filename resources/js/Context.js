import React, { Component } from 'react';
import axios from 'axios';
import config from './config/config';
import apiClient from './components/Auth/apiClient/apiClient';
import { Redirect } from 'react-router';


// import Data from './Data';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        authenticatedUser:  localStorage.getItem('authenticatedUser'),
        loggedIn: localStorage.getItem('loggedIn') || false,
        error: ''
    }

    componentDidMount(){
        console.log('asdfretert');
    }
    
    render() {
        
        const { authenticatedUser, loggedIn, error } = this.state;
    
        const value = {
          authenticatedUser,
          loggedIn,
          error,
         
          actions: { // Add the 'actions' property and object
              signIn: this.signIn,
              logOut: this.logOut
          }
        }
    
        return(
          <Context.Provider value={value}>
            {this.props.children}
          </Context.Provider>
        )
      }

    signIn = (email, password) => {
        apiClient.get('/sanctum/csrf-cookie')

        .then(response => {
    
            apiClient.post('/login', {
    
                email: email,
    
                password: password
    
            }).then(response => {
    
                if (response) {
                    if(response.data.error){
                        this.setState({
                            error: response.data.error
                        })
                        
                    } else {
                            // console.log(response.data.user);
                    // localStorage.setItem('user', response.data.user)
                    console.log(response.data.user);
                    this.setState({
                        authenticatedUser: response.data.user,
                        loggedIn: true,
                        error: ''
                    });
                    localStorage.setItem('authenticatedUser', JSON.stringify(response.data.user));
                    localStorage.setItem('loggedIn', true);
                    
                    window.location = '/shoplists';
                    // props.login();
                    }
                   
                   
                }
                
            })
            
    
        });
    } 

    logOut = () => {
        apiClient.get('/sanctum/csrf-cookie').then(response => {
            apiClient.post('/logout').then(response => {
                console.log(response);
                localStorage.clear();
                window.location = '/';
                if (response.status === 204) {
                   

                    // setLoggedIn(false);
        
                    // sessionStorage.setItem('loggedIn', false);
        
                }
        
            })
        })
    }
}

export const Consumer = Context.Consumer;

export default function withContext(Component) {
    return function ContextComponent(props) {
      return (
        <Context.Consumer>
          {(context) => <Component {...props} context={context} />}
        </Context.Consumer>
      );
    };
}

