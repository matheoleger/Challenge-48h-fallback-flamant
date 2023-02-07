import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import "../assets/css/Login.css"

export const Login = () => {
    const navigate = useNavigate();

    const navigateTo = (id ?: number) => {
    String(id)
      navigate('/register');
    }
    return (
        <body>
            <div className='item'>
                <form action="Login">
                    <input type="textarea" placeholder='E-mail' required autoFocus/><br />
                    <input type="textarea" placeholder='Password' required/><br />
                    <input type="submit" value='Login'/>
                </form>
                <input onClick={() => navigateTo()} type="submit" value='New account'/>
            </div>
            
            
            
        </body>        
    )
} 
