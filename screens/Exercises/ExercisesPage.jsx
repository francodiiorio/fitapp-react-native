import { FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";

import groupOfExcercises from "../../services/TypeOfExcercises/index.js";
import TypeOfExcercises from "../../components/TypeOfExcercises/index.js";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const ExercisesPage = () => {
  const navigation = useNavigation();
  const [excercises, setExcercises] = useState([]);

  const goToExcerciseType = (type) => {
    console.log(type)
    navigation.navigate("ExcerciseListPage", { type });
  };

  useFocusEffect(
    useCallback(() => {
      console.log("FOCUSIS");
      groupOfExcercises
        .getGroupExcersices()
        .then((group) => {
          setExcercises(group);
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
          <TouchableOpacity onPress={()=> goToExcerciseType(item.type)}>
            <TypeOfExcercises group={item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ExercisesPage;
