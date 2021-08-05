import React, { useState } from 'react';
import { withSanctum } from "react-sanctum";
import config from '../../../config/config';
import apiClient from '../apiClient/apiClient';
import axios from 'axios';

const Register = (props) => {

    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {

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

            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

            <input

            type="text"

            name="name"

            placeholder="Username"

            value={name}

            onChange={e => setName(e.target.value)}

            required

            />

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

export default Register;