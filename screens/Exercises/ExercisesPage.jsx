import { FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";

import getUniqueTypes from "../../services/categorys/index.js";
import TypeOfExcercises from "../../components/TypeOfExcercises/index.js";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import styles from "./exercisesStyle.js";

const ExercisesPage = () => {
  const navigation = useNavigation();
  const [Categorys, setCategorys] = useState([]);

  const goToExcerciseType = (category) => {
    navigation.navigate("ExcerciseListPage", category);
  };

  useFocusEffect(
    useCallback(() => {
     getUniqueTypes()
        .then((types) => {
          setCategorys(types);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [])
  );

  return (
    <SafeAreaView>
      <Text style={styles.subtitle}>Categorias</Text>

      <FlatList
        data={Categorys}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToExcerciseType(item)}>
            <TypeOfExcercises group={item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ExercisesPage;
