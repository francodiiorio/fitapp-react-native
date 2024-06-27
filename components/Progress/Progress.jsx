import { Text, View } from "react-native";
import { useContext, useEffect, useState } from "react"
import { Card } from "@rneui/themed";
import AuthContext from "../../services/AuthContext";
import ProgressItem from "../ProgressItem/ProgressItem";


import { db } from "../../credentials";
import { collection, addDoc, query, onSnapshot, QuerySnapshot, where } from "firebase/firestore";

export default ({exerciseName}) => {
    const { authData } = useContext(AuthContext)
    const [progress, setProgress] = useState([])

    useEffect(()=>{
      const collectionRef = collection(db, 'users', authData.user.uid, 'progress')
      const q = query(collectionRef, where('ejercicio', '==', exerciseName))

      const unsuscribe = onSnapshot(q, querySnapshot => {
        setProgress(
          querySnapshot.docs.map(doc => ({
            id: doc.id,
            km: doc.data().km,
            min: doc.data().min,
            ejercicio: doc.data().ejercicio
          }))
        )
      })
      return unsuscribe
    }, [])


  return (
    <View>
        <Text>Datos de tus entrenamientos</Text>
        {progress.map(progress => <ProgressItem key={progress.id}{...progress} />)}
    </View>
  );
};