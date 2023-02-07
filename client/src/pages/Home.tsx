import * as React from 'react'
import image from "../assets/img/paysage2.png"
import aggrandissement from "../assets/img/aggrandissement.png"
import "../assets/css/Home.css"
import { Item } from '../components/Item'
import { useNavigate } from 'react-router-dom'




export const Home = () => {
    let product : Item[] = []
    let title : string[] = []
    let price : number[] = []
    let desc : string[] = []

    for (let i = 0; i < 25; i++) {
        const table = new Item("Table",(i*2)+125,"Il y a 4 pieds",i);
        let lenght = product.push(table)
         lenght = title.push(table.name)
         lenght = price.push(table.price)
         lenght = desc.push(table.desc)
    }
    
    const navigate = useNavigate();

    const navigateTo = (id ?: number) => {
    String(id)
      navigate('/article/'+id);
    }

    

    return (
        <body>
            
            <div id='container'>
            {
                product.map((value, index) => (
                    <div id='box' key={index}>
                        <img src={image}/>
                        <button id='article' onClick={() => navigateTo(index)}>
                            <img id='aggrandissement' src={aggrandissement}/>
                        </button>
                        <p id='name'>{title[index]}</p>
                        <p id='price'>{price[index]}€</p>
                        <p id='desc'>{desc[index]}</p>
                    </div>
                ))
            }
        </div>
    </body>
        
    )
}
