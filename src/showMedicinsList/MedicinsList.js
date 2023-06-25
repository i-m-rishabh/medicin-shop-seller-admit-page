import { useContext } from "react";
import MedicinContext from "../medicinContext/MedicinContext";
// import MedicinItem from "./MedicinItem";
import classes from './medicinsList.module.css'
import { CartContext } from "../cartContext/CartContext";

const MedicinsList = () => {
    const ctx = useContext(MedicinContext);
    const cartCtx = useContext(CartContext);
    function addToBillHandler(medicin){
        console.log('added to cart');
        cartCtx.addToCart(medicin);
        ctx.decreaseQuantity(medicin);
    }
    return(
        <div className={classes.medicinsList}>
        <table>
            <thead>
                <td>name</td>
                <td>desc</td>
                <td>price</td>
                <td>quantity available</td>
            </thead>
            {
                ctx.medicins.map((medicin)=>{
                    const isAvailable = medicin.q_available>0;
                    return(
                        <tr>
                            <td>{medicin.name}</td>
                            <td>{medicin.desc}</td>
                            <td>{medicin.price}</td>
                            <td>{medicin.q_available}</td>
                            <td>{
                                isAvailable ?
                                <button onClick={()=>{addToBillHandler(medicin)}}>add to bill</button>
                                 : 
                                'out of stock'
                            }</td>
                        </tr>
                    )
                })
            }
        </table>
        {/* {
            ctx.medicins.map((medicin)=>{

                return <MedicinItem medicin={medicin}/>
            })
        } */}
        </div>
    )
}

export default MedicinsList;