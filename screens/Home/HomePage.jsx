import React from "react";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { obtenerConsejoAleatorio } from "../../services/Advices/consejos";
import styles from "./homeStyle";
import Excercise from "../../components/Excercise/index.js";
import { getExcercises } from "../../services/Excercises/index.js";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

const { width } = Dimensions.get("window");

const HomePage = () => {
  const consejo = obtenerConsejoAleatorio();

  const [ejPopulares, setEjPopulares] = useState();

  const listaDeEjercicios = [
    {name: "Flexiones",},
    {name: "Sentadillas",},
    {name: "Planchas",},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FittApp</Text>
        <Text style={styles.subtitle}>Bienvenido/a a tu app de fitness</Text>
      </View>
      <View style={styles.exercisesContainer}>
        <Text style={styles.excerciseTitle}>Ejercicios Populares</Text>
        <FlatList
          data={listaDeEjercicios}
          renderItem={({ item }) => (
            <View style={{ width: width * 0.8 }}>
              <Excercise excercise={item} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carousel}
        />
      </View>
      <Text style={styles.adviceTitle}>Consejo del día</Text>
      <View style={styles.exercisesContainer}>
        <Text style={styles.adviceText}>{consejo}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
