import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../context/firebase';
import './Login.css';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    

    const signInHandler = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const registrationHandler = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                if(auth){
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                    alt="Amazon"
                />
            </Link>
        
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}    
                    />

                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}    
                    /> 

                    <button
                        onClick={signInHandler}
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON CLONE conditions of Use & Sale. Please 
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button
                    className="login__registerButton"
                    onClick={registrationHandler}
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
