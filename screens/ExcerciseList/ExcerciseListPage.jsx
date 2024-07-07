import { FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState, useEffect
 } from "react";
import Excercise from "../../components/Excercise/index.js";
import listOfExcercises from "../../services/Excercises/index.js";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import useSports from "../../hooks/useSports.js";
import styles from "./excerciseListStyle.js";

const ExercisesListPage = ({ route }) => {
  const category = route.params;
  const { sports } = useSports(category);
  const navigation = useNavigation();

  const goToExcerciseDetail = (item) => {
    navigation.navigate("ExcerciseDetailPage", { item });
  };

  return (
    <SafeAreaView>
      <Text style={styles.subtitle}>{category}</Text>

      <FlatList
        style={styles}
        data={sports}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              goToExcerciseDetail(item);
            }}
          >
            <Excercise excercise={item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ExercisesListPage;
