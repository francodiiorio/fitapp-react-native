import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from "react";
import Excercise from "../../components/Excercise/index.js";
import listOfExcercises from "../../services/Excercises/index.js";
import { useFocusEffect, useNavigation, NavigationConteiner } from "@react-navigation/native";
import ExcerciseListPage from "../ExcerciseList/ExcerciseListPage.jsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()


const ExercisesPage = ({navigation}) => {
  //ES POR ACA
  const [excercises, setExcercises] = useState([]);

  useFocusEffect(
    useCallback(() => {
      console.log("FOCUSIS");
      listOfExcercises
        .getExcersices()
        .then((listExcercises) => {
          setExcercises(listExcercises);
        })
        .catch((error) => {
          console.log(error); 
        });
    }, [])
  );
  console.log(excercises);

  // OBTENGO LA LISTA DE EJERCICIOS COMPLETA Y LA MAPEO EN UN OBJETO DE TIPOS DE EJERCICIOS
  // const typeOfExcercises = excerciseList.reduce((acc, excercise) => {
  //   const { type } = excercise;

  //   if (!acc[type]) {
  //     acc[type] = [];
  //   }
  //   acc[type].push(excercise);
  //   return acc;
  // }, {});

  // // DESESTRUCTURO EL OBJETO Y LO CONVIERTO EN ARRAY PARA MANEJARLO

  // const cant = Object.keys(typeOfExcercises).length;
  // console.log(cant);

  // const group = () => {
  //   let array = [];

  //   for (let index = 0; index < cant; index++) {
  //     let group = Object.keys(typeOfExcercises)[index];

  //     array.push(group);
  //   }
  //   return array;
  // };

  // console.log(group());

  return (
    // <NavigationConteiner>
    //   <Stack.Navigator initialRouteName="ExercisesPage">

    //     <Stack.Screen name="ExercisesPage" component = {ExercisesPage}/>
        
    //     <Stack.Screen name="ExcerciseListPage" component = {excerciseListPage}/>
        <SafeAreaView>
      <Text>Ejercicios</Text>
      

      <FlatList
        data={excercises}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> {console.log("object")}}>
            <Excercise excercise={item} />
          </TouchableOpacity>
        )}
      />

        </SafeAreaView>



    //   </Stack.Navigator>
    

      

      

    // </NavigationConteiner>
  );
};

export default ExercisesPage;
