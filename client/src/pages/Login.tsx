import * as React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/Login.css"

export const Login = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const navigateTo = (id ?: number) => {
    String(id)
      navigate('/register');
    }
    const navigateHome = useNavigate();
    const [countHome, setCountHome] = useState(0);
    const navigateToHome = (id ?: number) => {
    String(id)
        navigateHome('/');
    }
    return (
        <body>
            <div className='item'>
                <form action="Login">
                    <input onClick={() => setCount(count + 1)} type="textarea" placeholder='E-mail' required autoFocus/><br />
                    <input onClick={() => setCount(count + 1)} type="textarea" placeholder='Password' required/><br />
                    <input onClick={() => navigateToHome()} type="submit" value='Login' required/>
                </form>
                <input onClick={() => navigateTo() } type="submit" value='New account'/>
                
            </div>
            
            
            
        </body>        
    )
} 
