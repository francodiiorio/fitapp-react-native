import { FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import Excercise from "../../components/Excercise/index.js";
import listOfExcercises from "../../services/Excercises/index.js";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import useSports from "../../hooks/useSports.js";
import styles from "./excerciseListStyle.js";

const ExercisesListPage = ({ route }) => {

  const {sports} = useSports();
  const { category } = route.params;
  const navigation = useNavigation();
  const [excercises, setExcercises] = useState([]);

  const goToExcerciseDetail = (item) => {
    navigation.navigate("ExcerciseDetailPage", { item });
  };


  useFocusEffect(
    useCallback(() => {
      listOfExcercises
        .getExcersices()
        .then((list) => {
          const filtrado = list.filter((x) => x.category === category.name);

          setExcercises(filtrado);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])
  );

  return (
    <SafeAreaView>
      <Text style= {styles.subtitle}>{category.name}</Text>

      <FlatList style={styles}
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
