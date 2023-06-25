import { useContext } from 'react';
import classes from './header.module.css';
import { CartContext } from '../cartContext/CartContext';
const  Header = () => {
    const ctx = useContext(CartContext);
    function cartClickHandler(){
        console.log(ctx.cartItems);        
    }
    return(
        <>
        <div className={classes.navbar}>
            <div className={classes.brandLogo}>MEDICIN SHOP</div>
            <div className={classes.cartLogo} onClick={cartClickHandler}>Cart</div>
        </div>
        </>
    )
}

export default Header;