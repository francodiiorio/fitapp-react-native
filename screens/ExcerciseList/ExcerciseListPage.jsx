import { FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import Excercise from "../../components/Excercise/index.js";
import listOfExcercises from "../../services/Excercises/index.js";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const ExercisesPage = ({ route }) => {
  const { type } = route.params;
  const navigation = useNavigation();
  const [excercises, setExcercises] = useState([]);

  // console.log(type);

  useFocusEffect(
    useCallback(() => {
      console.log("FOCUSsSsS");

      listOfExcercises
        .getExcersices()
        .then((list) => {
          const filtrado = list.filter((x) => x.type === type);

          setExcercises(filtrado);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])
  );
  // console.log(excercises);

  return (
    <SafeAreaView>
      <Text>Ejercicios</Text>

      <FlatList
        data={excercises}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log("NAVEGA A DETALLE DEL EJERCICIO");
            }}
          >
            <Excercise excercise={item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ExercisesPage;
