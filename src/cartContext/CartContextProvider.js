import { useState } from "react";
import { CartContext } from "./CartContext"

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const cartData = {
        cartItems:cartItems,
        addToCart: (item) => {
            setCartItems((prev)=>{
                return [...prev,item]
            })
        }
    }
    return(
        <CartContext.Provider value={cartData}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;