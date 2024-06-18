import React from "react";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { obtenerConsejoAleatorio } from '../../services/Advices/consejos';
import styles from './homeStyle';
import Excercise from "../../components/Excercise/index.js";

const { width } = Dimensions.get('window');

const HomePage = () => {
    const consejo = obtenerConsejoAleatorio();

    const cardsData = [
        { excercise: { name: "Ejercicio 1", type: "Tipo 1" }, group: null },
        { excercise: { name: "Ejercicio 2", type: "Tipo 2" }, group: null },
        { excercise: null, group: "Grupo 1" }
    ]; // Datos para 3 tarjetas

    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>FittApp</Text>
                <Text style={styles.subtitle}>Bienvenido/a a tu app de fitness</Text>
            </View>
            <Text style={styles.adviceTitle}>Consejo del día</Text>
            <View style={styles.exercisesContainer}>
                
                <Text style={styles.adviceText}>{consejo}</Text>
            </View>
            <View style={styles.exercisesContainer}>
                <Text style={styles.excerciseTitle}>Ejercicios Populares</Text>
                <FlatList
                    data={cardsData}
                    renderItem={({ item }) => (
                        <View style={{ width: width * 0.8 }}>
                            <Excercise excercise={item.excercise} group={item.group} />
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.carousel}
                />
            </View>
            
        </SafeAreaView>
    );
}

export default HomePage;
