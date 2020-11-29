import React, {useEffect} from 'react';
import BackArr from '../assets/back.png'
import getSymbolFromCurrency from 'currency-symbol-map'


const Cart = ({currencies,setCart, cart, setCurrency,  Currency,  setCartState, cartState}) => {
   
    return (  
        <div className={cartState? "box": "box2"}>
            <div className="cart-item">
                <div>
                    <img onClick={() => setCartState(false)} className="cart-back-arrow" src={BackArr} alt="back arrow"/>
                </div>
                <p className="text-align">Your Cart</p>
                <div>
                    <select onChange={(e) => {
                        setCurrency(e.target.value)
                    }}>
                        {
                            currencies.map(item => <option value={item}>{item}</option>)
                        }
                       
                    </select>
                </div>
                {
                    cart.map((item, i) => (
                        <div key={item.id} className="product-in-cart">
                            <div className="d-flex justify-content-end ">
                                <span>X</span>
                            </div>
                            <div>{item.title}</div>
                            <div className="d-flex-space-between pr-3 mt-5 cart-item-detail-wrapper">
                                <div className="d-flex align-items-end">
                                    <div className="d-flex-center justify-content-between incremental">
                                       <span className="cursor incr-action" onClick={() => {
                                           let tempCart = []
                                           if(item.qty === 1){
                                              tempCart = cart.filter(data => data.id !== item.id)

                                           }else {
                                             tempCart = cart.map(itemCart => {
                                                if(itemCart.id === item.id){
                                                    itemCart = {...itemCart, qty: itemCart.qty - 1}
                                                }
                                                return itemCart
                                            })

                                           }
                                            
                                            setCart(tempCart)
                                          
                                       }}>-</span>
                                        <span>{item.qty}</span>
                                       <span className="cursor incr-action"
                                       onClick={() => {
                                           const tempCart = cart.map(itemCart => {
                                               if(itemCart.id === item.id){
                                                   itemCart = {...itemCart, qty: itemCart.qty + 1}
                                               }
                                               return itemCart
                                           })
                                           setCart(tempCart)
                                    }}
                                       >+</span>

                                    </div>
                                </div>
                                <div className="d-flex align-items-end">
                                {getSymbolFromCurrency(Currency)}{item.price}
                                </div>
                                <div className="d-flex align-items-start">
                                   <img className="cart-product-img" src={item.image_url} alt="product"/>
                                </div>
                            </div>

                        </div>
                    ))
                }

                <div className="cart-footer">
                    <hr/>
                    <div className="d-flex-space-between">
                        <div>
                            Subtotal
                        </div>
                        <div>
                        {getSymbolFromCurrency(Currency)}{cart.reduce((acc, item) => {
                            return acc + (item.price * item.qty)
                        }, 0)}
                        </div>
                    </div>
                    <div className="mt-3">
                    <button className="subscription-btn cursor">
                        MAKE THIS A SUBSCRIPTION (SAVE 20%)
                    </button>
                    </div>
                   <div className="mt-3">
                   <button className="checkout-btn cursor">
                        PROCEED TO CHECKOUT
                    </button>
                   </div>

                    
                </div>
                
           
            </div>
        </div>
    );
}
 
export default Cart;