import * as React from 'react'
import "../assets/css/Login.css"

export const Login = () => {
    return (
        <body>
            <div className='item'>
                <form method="post" autoComplete="off" className="form" >
                    <input type="textarea" placeholder='  E-mail' autoFocus/><br />
                    <input type="textarea2" placeholder='  Password' autoFocus/><br />
                    <input type="submit" value='Login'/>
                </form>
                <form action="Register">
                    <input type="button" value='Register'/>
                </form>
                
           

              
                
       

                 

             
                
             


            </div>
            
        </body>
        
    )
}