import { Text, View, TextInput, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import styles from "./excerciseDetailStyles";
import { guardarValores } from "../../services/User/userServices";
import AuthContext from "../../services/AuthContext";

import Progress from "../../components/Progress/Progress";
import { db } from "../../credentials";
import { collection, addDoc } from "firebase/firestore";

const ExerciseDetailPage = ({ route }) => {
  const { item } = route.params;
  const [excercise, setExcercise] = useState(item);
  const { authData } = useContext(AuthContext)


  const [progress, setProgress] = useState({
    dato1: '',
    dato2: ''
  })

  const onSend = async() => {
    
    const progressData = {

      km: parseInt(progress.dato1),
      min: parseInt(progress.dato2),
      ejercicio: excercise.name

    };

    if (isNaN(progressData.km) || isNaN(progressData.min)) {
      throw new Error('Por favor, ingrese valores numéricos válidos.');
    }


    await addDoc(collection(db, 'users', authData.user.uid, 'progress'), progressData)
    Alert.alert('Éxito', 'Datos guardados correctamente');
    console.log(authData.user.uid)
  }

  return (
    <SafeAreaView style={styles.container}>
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
            excercise.category === "Aeróbico" ? "Km recorridos" : "Peso"
          }
          autoCapitalize="none"
          onChangeText={(text) => setProgress({...progress, dato1: text})}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.textInput}
          placeholder={
            excercise.category === "Aeróbico"
              ? "Minutos"
              : "Cantidad de repeticiones"
          }
          autoCapitalize="none"
          onChangeText={(text) => setProgress({ ...progress, dato2: text })}
          keyboardType="number-pad"
        />
        <Button title="Guardar datos" onPress={onSend} />
        <Progress exerciseName={excercise.name}/> 
          
          </>
        ): <Text>Para mirar tu progreso inicia sesion</Text>}
        
        

        

      </View>
    </SafeAreaView>
  );
};

export default ExerciseDetailPage;
