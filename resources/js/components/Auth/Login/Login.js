import React, { useState } from 'react';
import { withSanctum } from "react-sanctum";
import config from '../../../config/config';
import axios from 'axios';

const Login = () => {
   // const [name, setName] = ('');
    const [user, setUser] = useState([]);
   function handleSubmit(e) {
       e.preventDefault();
       console.log('clicked');
    axios.get(`${config.apiBaseUrl}login`) 
    .then(function (response) {
        const user = response.data;
        setUser(user); // The react-sanctum setUser function
        
    })
    .catch(function (error) {
        console.log(error);
    });
    }
    return(
        <>  
        <div className="container-fluid">
        <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
           
        </>
    )
}

export default Login;