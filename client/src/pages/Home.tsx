import * as React from 'react'
import image from "../assets/img/paysage.png"

import "../assets/css/Home.css"

class Item {
    name : string
    price : number
    desc : string

    constructor(name : string, price : number, desc : string){
        this.name = name
        this.price = price
        this.desc = desc
    }
}


export const Home = () => {
    const prix = "5€"
    const table = new Item("Table",500,"Il y a 4 pied")

    return (
        
        <body>
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#about">About</a>

                <div className="search-container">
                <form action="">
                    <input type="text" placeholder="Search.." name="search" autoComplete='off'/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        </div>
        <div id='item'>
            <div id='box'>
            <img src={image}/>
            <p id='name'>{table.name}</p>
            <p id='price'>{table.price}€</p>
            <p id='desc'>{table.desc}</p>
            </div>
            
            <div id='box'>
            <img src={image}/>
            <p id='name'>{table.name}</p>
            <p id='price'>{table.price}€</p>
            <p id='desc'>{table.desc}</p>
            </div>

            <div id='box'>
            <img src={image}/>
            <p id='name'>{table.name}</p>
            <p id='price'>{table.price}€</p>
            <p id='desc'>{table.desc}</p>
            </div>

            <div id='box'>
            <img src={image}/>
            <p id='name'>{table.name}</p>
            <p id='price'>{table.price}€</p>
            <p id='desc'>{table.desc}</p>
            </div>

            <div id='box'>
            <img src={image}/>
            <p id='name'>{table.name}</p>
            <p id='price'>{table.price}€</p>
            <p id='desc'>{table.desc}</p>

            </div>

            <div id='box'>
            <img src={image}/>
            <p id='name'>{table.name}</p>
            <p id='price'>{table.price}€</p>
            <p id='desc'>{table.desc}</p>
            </div>

            <div id='box'>
            <img src={image}/>
            <p id='name'>{table.name}</p>
            <p id='price'>{table.price}€</p>
            <p id='desc'>{table.desc}</p>
            </div>

            <div id='box'>
            <img src={image}/>
            <p id='name'>{table.name}</p>
            <p id='price'>{table.price}€</p>
            <p id='desc'>{table.desc}</p>
            </div>
        </div>
    </body>
        
    )
}
