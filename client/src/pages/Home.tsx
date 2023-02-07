import * as React from 'react'
import image from "../assets/img/paysage.png"

import "../assets/css/Home.css"
import { Item } from '../components/Item'




export const Home = () => {
    const prix = "5€"
    const table = new Item("Table",500,"Il y a 4 pied")

    return (
        
        <body>
            
        <div id='container'>
            <div id='box'>
            <img src={image}/>
            <button >
                Activer les lasers
            </button>
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
