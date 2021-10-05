import React, { useState } from 'react';
// import config from '../../../config/config';
import apiClient from '../apiClient/apiClient';
// import axios from 'axios';
import { GiCogLock } from 'react-icons/gi';
require('./login.scss');


const Login = (props) => {

    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    const [password, setPassword] = React.useState('');
    const [rPassword, setRPassword] = React.useState('');
    //const [data, setData] = React.useState([]);

    // const[loggedIn, setLoggedIn] = React.useState(false);

    
    

    const handleSubmitLogin = (e) => {
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

    const handleSubmitSignup = (e) => {

        e.preventDefault();

        apiClient.get('/sanctum/csrf-cookie')

    .then(response => {

        apiClient.post('register', {
            name: name,
            email: email,
            password_confirmation: password,
            password: password

        }).then(response => {

            console.log(response)

        })

    });

    }
    
    return (
       
        <div>
              
           

            {props.context.error ? 
                <div class="alert alert-danger" role="alert">
                   {props.context.error}
                </div>
                :
                ''
            
            }
            
            <div class="row">
            <div class="col-md-6 mx-auto p-0">
                <div class="card">
                    <div class="login-box">
                        <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
                            <div class="login-space">
                                <div class="login">
                                <form onSubmit={handleSubmitLogin}>
                                    <div class="group"> <label for="user" class="label">Email</label> 
                                    <input 
                                   
                                    type="email"
                                    class="input"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required /> </div>
                                    <div class="group"> <label for="pass" class="label">Password</label> <input 
                                    id="pass" 
                                    type="password" 
                                    class="input" 
                                    data-type="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    /> </div>
                                    <div class="group"> <input id="check" type="checkbox" class="check" checked /> <label for="check"><span class="icon"></span> Keep me Signed in</label> </div>
                                    <div class="group"> <input type="submit" class="button" value="Sign In" /> </div>
                                    <div class="hr"></div>
                                    <div class="foot"> <a href="#">Forgot Password?</a> </div>
                                </form>
                                </div>


                                <div class="sign-up-form">
                                    <form onSubmit={handleSubmitSignup}>
                                        <div class="group"> <label for="user" class="label">Username</label> <input 
                                        id="user"
                                        type="text"
                                        name="name"
                                        class="input"
                                        placeholder="Username"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required
                                        /> </div>
                                        <div class="group"> <label for="pass" class="label">Password</label> 
                                        <input 
                                        id="pass" 
                                        type="password" 
                                        class="input" 
                                        data-type="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                        />
                                         </div>
                                        <div class="group"> <label for="pass" class="label">Repeat Password</label>
                                        <input 
                                        id="pass" 
                                        type="password" 
                                        class="input" 
                                        data-type="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={rPassword}
                                        onChange={e => setRPassword(e.target.value)}
                                        required
                                        />
                                         </div>
                                        <div class="group"> <label for="pass" class="label">Email Address</label> <input 
                                        id="user" 
                                        type="email"
                                        class="input"
                                        name="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required /> </div>
                                        <div class="group"> <input type="submit" class="button" value="Sign Up" /> </div>
                                        <div class="hr"></div>
                                        <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

           
            

        </div>

    );

}

export default Login;