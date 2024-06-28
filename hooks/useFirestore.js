import React, { useState, useEffect } from "react"
import { collection, query, onSnapshot, where, addDoc } from "firebase/firestore"
import { db } from "../credentials"

const useFirestore = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    const addData = async(newData, userId) => {
    
        if (isNaN(newData.km) || isNaN(newData.min)) {
            console.log(newData)
          throw new Error('Por favor, ingrese valores numéricos válidos.');
        }

        await addDoc(collection(db, 'users', userId, 'progress'), newData)
    
    }
    return {addData}
}

export default useFirestore