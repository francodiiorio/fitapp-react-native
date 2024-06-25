import { Text, View,TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import styles from "./excerciseDetailStyles";


const ExerciseDetailPage = ({ route }) => {
  const { item } = route.params;
  const [excercise, setExcercise] = useState(item);


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
        placeholder= {excercise.category === "Aeróbico"?"Distancia Recorrida":"Peso"}
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder={excercise.category === "Aeróbico"?"Tiempo":"Cantidad de repeticiones"}
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />


      </View>
    </SafeAreaView>
  );
};

export default ExerciseDetailPage;
