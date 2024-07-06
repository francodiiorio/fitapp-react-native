import React, { useState, useEffect } from "react"
import { collection, query, onSnapshot, where, addDoc } from "firebase/firestore"
import { db } from "../credentials"

const useTrainings = (exerciseName, userId) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();
    const [progress, setProgress] = useState([])


    const addData = async(newData, userId) => {
    
        if (isNaN(newData.km) || isNaN(newData.min)) {
            // console.log(newData)
          throw new Error('Por favor, ingrese valores numéricos válidos.');
        }

        await addDoc(collection(db, 'users', userId, 'training'), newData)
    
    }

    useEffect(()=>{
        if (!userId || !exerciseName) {
            return
        }

          // console.log(userId);
          // console.log(exerciseName);

        const collectionRef = collection(db, 'users', userId, 'training')
        const q = query(collectionRef, where('ejercicio', '==', exerciseName))
  
        const unsuscribe = onSnapshot(q, querySnapshot => {
          setProgress(
            querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
              ejercicio: doc.data().ejercicio
            }))
          )
        })

        
        return unsuscribe
      }, [])

    
    return {addData, progress}
}

export default useTrainings