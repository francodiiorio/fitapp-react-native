import { Text, View, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react"
import { Card } from "@rneui/themed";
import AuthContext from "../../services/AuthContext";
import ProgressItem from "../ProgressItem/ProgressItem";

import useFirestore from "../../hooks/useFirestore";
import { db } from "../../credentials";
import { collection, addDoc, query, onSnapshot, QuerySnapshot, where } from "firebase/firestore";

export default ({exerciseName}) => {
    const { authData } = useContext(AuthContext)
    const {progress} = useFirestore(exerciseName, authData.user.uid)


  return (
    <View>
        <Text>Datos de tus entrenamientos</Text>
        
        {progress.map(progress => <ProgressItem key={progress.id}{...progress} />)}
    </View>
  );
};