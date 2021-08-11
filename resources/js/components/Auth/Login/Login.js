import React, { useState } from 'react';
// import config from '../../../config/config';
import apiClient from '../apiClient/apiClient';
// import axios from 'axios';
import { GiCogLock } from 'react-icons/gi';

const Login = (props) => {

    const [email, setEmail] = React.useState('');

    const [password, setPassword] = React.useState('');
    //const [data, setData] = React.useState([]);

    // const[loggedIn, setLoggedIn] = React.useState(false);

    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.context.actions.signIn(email, password);
        
        
    //     apiClient.get('/sanctum/csrf-cookie')

    // .then(response => {

    //     apiClient.post('/login', {

    //         email: email,

    //         password: password

    //     }).then(response => {

    //         if (response) {
    //             console.log(response.data.user);
    //            // localStorage.setItem('user', response.data.user)
    //            window.location = '/';
    //            // props.login();

    //         }

    //     })

    // });
        
    }
    
    return (
       
        <div>
              
            <h1>Login</h1>

            {props.context.error ? 
                <div class="alert alert-danger" role="alert">
                   {props.context.error}
                </div>
                :
                ''
            
            }
            
            <form onSubmit={handleSubmit}>

                <input

                    type="email"

                    name="email"

                    placeholder="Email"

                    value={email}

                    onChange={e => setEmail(e.target.value)}

                    required

                />

                <input

                    type="password"

                    name="password"

                    placeholder="Password"

                    value={password}

                    onChange={e => setPassword(e.target.value)}

                    required

                />

                <button type="submit">Login</button>

            </form>

            

        </div>

    );

}

export default Login;