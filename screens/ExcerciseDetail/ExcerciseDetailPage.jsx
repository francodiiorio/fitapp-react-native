import { Text, View, TextInput, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import styles from "./excerciseDetailStyles";
import { guardarValores } from "../../services/User/userServices";
import AuthContext from "../../services/AuthContext";


import { db } from "../../credentials";
import { collection, addDoc } from "firebase/firestore";

const ExerciseDetailPage = ({ route }) => {
  const { item } = route.params;
  const [excercise, setExcercise] = useState(item);
  const { authData } = useContext(AuthContext)

//  const [dato1, setDato1] = useState();
 // const [dato2, setDato2] = useState();

  const [progress, setProgress] = useState({
    dato1: '',
    dato2: ''
  })

  const saveData = () => {
    console.log("SE GUARDA");

    guardarValores(dato1, dato2);
  };

  const onSend = async() => {
    
    const progressData = {

      km: parseInt(progress.dato1),
      min: parseInt(progress.dato2),

    };

    if (isNaN(progressData.km) || isNaN(progressData.min)) {
      throw new Error('Por favor, ingrese valores numéricos válidos.');
    }


    //await addDoc(collection(db, 'progress'), progressData)
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
        <TextInput
          style={styles.textInput}
          placeholder={
            excercise.category === "Aeróbico" ? "Distancia Recorrida" : "Peso"
          }
          autoCapitalize="none"
          onChangeText={(text) => setProgress({...progress, dato1: text})}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.textInput}
          placeholder={
            excercise.category === "Aeróbico"
              ? "Tiempo"
              : "Cantidad de repeticiones"
          }
          autoCapitalize="none"
          onChangeText={(text) => setProgress({ ...progress, dato2: text })}
          keyboardType="number-pad"
        />
        <Button title="Guardar datos" onPress={onSend} />
      </View>
    </SafeAreaView>
  );
};

export default ExerciseDetailPage;
