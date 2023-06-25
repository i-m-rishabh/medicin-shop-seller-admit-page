
import { useState } from "react";
import MedicinContext from "./MedicinContext.js";

const MedicinContextProvider = (props) => {
    const [medicins, setMedicins] = useState([
        {
            name:'paracetamol',
            desc:'used to solve fever',
            price:'12',
            q_available:5,
        }
    ]);
    const medicinData = {
            medicins: medicins,
            addMedicin: (newMedicin) => {
                // console.log('medicin added to medicin context');
                // medicinData.medicins.push(newMedicin);
                setMedicins((prev)=>{
                    return [...prev, newMedicin]
                })
            },
            decreaseQuantity: (medicin) => {
                setMedicins((prev)=>{
                    return prev.map((ctxMedicin)=>{
                        if(ctxMedicin.name === medicin.name){
                            return {...ctxMedicin, q_available:ctxMedicin.q_available-1}
                        }else{
                            return ctxMedicin;
                        }
                    })
                })
            },
    }

    return(
        <MedicinContext.Provider value={medicinData}>
            {props.children}
        </MedicinContext.Provider>
    )
}

export default MedicinContextProvider;