import React, {useState} from 'react'
import {useQuery} from "@apollo/react-hooks"
import gql from 'graphql-tag'
import Products from '../components/Products'
import Cart from '../components/Cart'

export const PangaeaContainer = ({Currency, setCurrency}) => {
    const {data: {products = [], currency = []} = {} } = useQuery(gql`
    query  {
        products {
          id,
          title,
          image_url,
          price(currency: ${Currency}) ,
        },
        currency
      }
`)
    
    const [cartState, setCartState] = useState(false)
    const [cart, setCart] = useState([
        
    ])

    return (
        <div>
            <div className=" m3 d-flex justify-content-between align-items-center">
                <div>
                <h2>All products</h2>
                <p>A 360° look at Lumin</p>
                </div>
                <div>
                    <select>
                        <option value="Filter by">Filter by</option>
                    </select>
                </div>
            </div>
            
            <div className="product-wrapper">
                {
                    products.map(product => <Products 
                        setCartState={setCartState} 
                        setCart={setCart}
                        cart={cart}
                        Currency={Currency} 
                        key={product.id} 
                        product={product} /> ) 
                }
                

            </div>

            <Cart 
            setCart={setCart}
            setCurrency={setCurrency}
            cart={cart}
            setCartState={setCartState} 
            cartState={cartState} 
            currencies={currency} 
            Currency={Currency} />
        
        </div>

    )
       
    
}