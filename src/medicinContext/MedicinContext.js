import { createContext } from "react";

const MedicinContext = createContext({
    medicins: [{
        name:'paracetamol',
        desc:'used to solve fever',
        price:'12',
        q_available:5,
    }],
    addMedicin: (newMedicin) => {
        console.log('medicin added');

    },
});

export default MedicinContext;