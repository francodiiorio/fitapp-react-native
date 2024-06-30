import { Text, View, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react"
import { Card } from "@rneui/themed";
import AuthContext from "../../services/AuthContext";
import TrainingItem from "../TrainingItem/TrainingItem";

import useFirestore from "../../hooks/useTrainings";
import { db } from "../../credentials";
import { collection, addDoc, query, onSnapshot, QuerySnapshot, where } from "firebase/firestore";
import useTrainings from "../../hooks/useTrainings";

export default ({exerciseName}) => {
    const { authData } = useContext(AuthContext)
    const {progress} = useTrainings(exerciseName, authData.user.uid)


  return (
    <View>
        <Text>Datos de tus entrenamientos</Text>
        
        {progress.map(progress => <TrainingItem key={progress.id}{...progress} />)}
    </View>
  );
};