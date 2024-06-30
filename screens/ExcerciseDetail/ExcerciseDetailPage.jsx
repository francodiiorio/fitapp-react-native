import { Text, View, TextInput, Button, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import styles from "./excerciseDetailStyles";
import { guardarValores } from "../../services/User/userServices";
import AuthContext from "../../services/AuthContext";

import useTrainings from "../../hooks/useTrainings";
import Training from "../../components/Training/Training";
import { db } from "../../credentials";
import { collection, addDoc } from "firebase/firestore";

const ExerciseDetailPage = ({ route }) => {
  const { item } = route.params;
  const [excercise, setExcercise] = useState(item);
  const { authData } = useContext(AuthContext)
  const { addData } = useTrainings()


  const [progress, setProgress] = useState({
    dato1: '',
    dato2: ''
  })

  const onSend = async() => {
    
    const progressData = {

      km: parseInt(progress.dato1),
      min: parseInt(progress.dato2),
      ejercicio: excercise.name,
      vel: parseInt(parseInt(progress.dato1) / parseInt(progress.dato2))

    };

    addData(progressData, authData.user.uid);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>{excercise.name}</Text>
      </View>
      <Text style={styles.adviceTitle}>Detalle del ejercicio</Text>

      <Text style={styles.subtitle}>{excercise.description}</Text>

      
      <View style={styles.container}>

        {authData ? (
          <>
            <TextInput
          style={styles.textInput}
          placeholder={
            excercise.type === "aerobic" ? "Km recorridos" : "Peso"
          }
          autoCapitalize="none"
          onChangeText={(text) => setProgress({...progress, dato1: text})}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.textInput}
          placeholder={
            excercise.type === "aerobic"
              ? "Minutos"
              : "Cantidad de repeticiones"
          }
          autoCapitalize="none"
          onChangeText={(text) => setProgress({ ...progress, dato2: text })}
          keyboardType="number-pad"
        />
        <Button title="Guardar datos" onPress={onSend} />
        <View style={styles.containerFlatList}>
        <Training  exerciseName={excercise.name}/> 
        </View>
        
          
          </>
        ): <Text>Para mirar tu progreso inicia sesion</Text>}
        
        

        

      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseDetailPage;
