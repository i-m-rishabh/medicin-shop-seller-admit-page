import { useContext } from "react";
import MedicinContext from "../medicinContext/MedicinContext.js";

const AddNewProduct = () => {
    const ctx = useContext(MedicinContext);    
    function addMedicinHandler(e){
        e.preventDefault();
        // console.log('medicin added');
        let name = e.target.p_name.value;
        let desc = e.target.p_desc.value;
        let price = e.target.p_price.value;
        let quantity = e.target.p_quantity.value;
        // console.log(name,desc,price,quantity);
        ctx.addMedicin({
            name: name,
            desc: desc,
            price: price,
            q_available: quantity,
        });
    }
    return(
        <>
            <form onSubmit={addMedicinHandler}>
                <input type="text" name="p_name" id="p_name" placeholder="medicin name"/>
                <input type="text" name="p_desc" id="p_desc" placeholder="medicin description"/>
                <input type="number" name="p_price" id="p_price" placeholder="medicin price"/>
                <input type="number" name="p_quantity" id="p_quantity" placeholder="quantity available"/>
                <button type="submit">add product</button>
            </form>
        </>
    )
}

export default AddNewProduct;