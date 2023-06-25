// import { useContext } from 'react';
// import classes from './medicinsList.module.css'
// import { CartContext } from '../cartContext/CartContext';
// const MedicinItem = ({medicin}) => {
//     const cartContext = useContext(CartContext);
//     const {name,desc,price,q_available} = medicin;
//     function addToBillHandler(){
//         console.log(name,desc,price,q_available +'added to bill');
//         cartContext.addToCart();
//     } 
//     return(
//         <div className={classes.medicinItem}>
//             <li>
//                 <div>{name}</div>
//                 <div>{desc}</div>
//                 <div>{price}</div>
//                 <div>{q_available}</div>
//                 <button onClick={addToBillHandler}>add to bill</button>
//             </li>
//         </div>
//     )
// }

// export default MedicinItem;