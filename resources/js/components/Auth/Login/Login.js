import React, { useState } from 'react';
import { withSanctum } from "react-sanctum";
import config from '../../../config/config';
import apiClient from '../apiClient/apiClient';
import axios from 'axios';

const Login = (props) => {

    const [email, setEmail] = React.useState('');

    const [password, setPassword] = React.useState('');
    const [data, setData] = React.useState([]);

    // const[loggedIn, setLoggedIn] = React.useState(false);


    const logout = () => {
        apiClient.get('/sanctum/csrf-cookie').then(response => {
            apiClient.post('/logout').then(response => {
                console.log(response);
                if (response.status === 204) {
                   
                    // setLoggedIn(false);
        
                    // sessionStorage.setItem('loggedIn', false);
        
                }
        
            })
        })

        
    
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        apiClient.get('/sanctum/csrf-cookie')

    .then(response => {

        apiClient.post('/login', {

            email: email,

            password: password

        }).then(response => {

            if (response) {
                window.location = '/';
               // props.login();

            }

        })

    });

    }

    return (

        <div>

            <h1>Login</h1>
            <h2>hello {data}</h2>
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

            <button onClick={logout} className="nav-link btn btn-link">Logout</button> 

        </div>

    );

}

export default Login;