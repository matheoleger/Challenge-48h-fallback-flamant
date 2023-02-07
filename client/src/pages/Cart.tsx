import * as React from 'react';
import { useState } from 'react';
import "../assets/css/Cart.css";
import item1 from "../assets/img/item1.jpg"
import item2 from "../assets/img/item2.jpg"
import item3 from "../assets/img/item3.png"
export const Cart = () => {
     // Stocker les produits dans le panier
     const [cart, setCart] = useState([]);
  
     // Gestionnaire d'événement pour ajouter un produit au panier
     const AddToCart = (product: any) => {
       setCart(product);
     };
     
     
    return (
        <body>
	<title>Shopping Cart </title>
	
    
        
        <div className="CartContainer">
            <div className="Header">
                <h3 className="Heading">Cart</h3>
                
            </div>

            <div className="Cart-Items">
                <div className="image-box">
                    <img src="item1.jpg"  />
                </div>
                <div className="about">
                    <h1 className="title">cheese1</h1>
                    <h3 className="subtitle">250kg</h3>
                    <img src="images/veg.png" />
                </div>
                <div className="compteur">
                    <div className="btn">+</div>
                    <div className="compte">5</div>
                    <div className="btn">-</div>
                </div>
                <div className="prix">
                    <div className="total">92</div>
                </div>
            </div>

            <div className="Cart-Items pad">
                <div className="image-box">
                    <img src="item3.png"  />
                </div>
                <div className="about">
                    <h1 className="title">Cheese2</h1>
                    <h3 className="poids">2KG</h3>
                    <img src="item2.jpg" />
                </div>
                <div className="compteur">
                    <div className="btn">+</div>
                    <div className="compte">6</div>
                    <div className="btn">-</div>
                </div>
                <div className="prix">
                    <div className="montant">45.19</div>
                    
                    
                </div>
            </div>
            <div className="Total">
            <div className="somme">
                <div>
                    <div className="sommeTotal">Somme total</div>
                    <div className="items">2 items</div>
                </div>
                <div className="sommeTotal">45</div>
            </div>
            <button className="button">Checkout</button></div>
        </div>
        </body> )
}