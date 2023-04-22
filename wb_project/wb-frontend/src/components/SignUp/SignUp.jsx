import React, { useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import './Login.css'

import {baseAPI} from '../../api/api'

const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState()
   

    const submit = async(e) => {
        e.preventDefault()
        console.log(email,name, password)
        const result = {
            'username' : name,
            'email': email,
            'password': password,
        }

        baseAPI.createUser(result).then(function (response) {
            navigate('/login', {replace: true, state: {from: location}})
        }).catch((error)=> {
            error.response.data.username && error.response.data.username[0]==="Пользователь с таким именем уже существует." &&
            setError(error.response.data.username[0]);
        })
    }

    return (
        <>
           <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
                <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Регистрация</h1>
                
                <div className="form-floating">
                    <input className="form-control" id="floatingInput" placeholder="name" onChange={e => setName(e.target.value)}/>
                <label for="floatingInput">Name</label>
                </div>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <label for="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
            </main>
        </>
    )
}

export default SignUp