import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map'

const Products = ({product, cart,setCart, Currency, setCartState}) => {
    return ( 
        <div className="product">
            <img src={product.image_url} alt="product"/>
            <h5 className="m0 mt-4 text-align">{product.title}</h5>
    <p className="m0 mt-3"> From {getSymbolFromCurrency(Currency)}{product.price}</p>
    <button onClick={() => {
        const itemExist = cart.find(item => item.id === product.id)
        if(itemExist){
            const itemIndex = cart.indexOf(item => item.id === product.id)
            cart[itemIndex]  = itemExist.qty++
            setCart([...cart])
            console.log("yesss")
            setCartState(true)

        }else{
            setCartState(true)
            setCart([...cart, {...product, qty: 1}])

        }

       
    }} className="add-to-cart-btn">Add to Cart</button>
        </div>
     );
}
 
export default Products;