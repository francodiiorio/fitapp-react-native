import { Text, View, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import styles from "./excerciseDetailStyles";
import { guardarValores } from "../../services/User/userServices";

const ExerciseDetailPage = ({ route }) => {
  const { item } = route.params;
  const [excercise, setExcercise] = useState(item);

  const [dato1, setDato1] = useState();
  const [dato2, setDato2] = useState();

  const saveData = (dato1, dato2) => {
    console.log("SE GUARDA");

    guardarValores(dato1, dato2);
  };

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
          onChangeText={(text) => setDato1(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder={
            excercise.category === "Aeróbico"
              ? "Tiempo"
              : "Cantidad de repeticiones"
          }
          autoCapitalize="none"
          onChangeText={(text) => setDato2(text)}
        />
        <Button title="Guardar datos" onPress={saveData()} />
      </View>
    </SafeAreaView>
  );
};

export default ExerciseDetailPage;
