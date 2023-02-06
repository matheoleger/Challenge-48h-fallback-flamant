import * as React from 'react'
import image from "../assets/img/paysage.png"

import "../assets/css/Home.css"

export const Home = () => {
    return (
    <body>
        
        <div className='item'>
            <div id='box1'>
            <img src={image}/>
            </div>
            <div id='box2'></div>
            <div id='box3'></div>
            <div id='box4'></div>
            <div id='box5'></div>
            <div id='box6'></div>
            <div id='box7'></div>
            <div id='box8'></div>
        </div>
    </body>
        
    )
}