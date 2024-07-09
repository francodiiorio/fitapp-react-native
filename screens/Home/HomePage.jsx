import React from "react";
import {
  TouchableHighlight,
  Button,
  Modal,
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import Picker from "react-native-picker-select";
import { SafeAreaView } from "react-native-safe-area-context";
import { obtenerConsejoAleatorio } from "../../services/Advices/consejos";
import styles from "./homeStyle";
import Excercise from "../../components/Excercise/index.js";
import { getExcercises } from "../../services/Excercises/index.js";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState, useContext } from "react";
import AuthContext from "../../services/AuthContext";
import useMeta from "../../hooks/useMeta.js";

const { width } = Dimensions.get("window");

const HomePage = () => {
  const consejo = obtenerConsejoAleatorio();

  const { authData } = useContext(AuthContext);
  const { addData } = useMeta();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputText, setInputText] = useState("");

  const listaDeEjercicios = [
    { name: "Flexiones" },
    { name: "Sentadillas" },
    { name: "Planchas" },
  ];

  handleMeta = async () => {
    if (isNaN(inputText) || !inputText) {
      Alert.alert(
        "Tipo de dato invalido",
        "Por favor, ingrese valores numéricos válidos."
      );
    } else {
      setModalVisible(!modalVisible);

      const userMeta = {
        type: selectedValue,
        value: parseInt(inputText),
        done: false,
        date: new Date(),
      };

      addData(userMeta, authData.user.uid);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
        {authData ? (
          <View style={styles.button}>
            <Button
              title="Ponte una meta"
              onPress={() => setModalVisible(true)}
            />
          </View>
        ) : (
          <View></View>
        )}
        <Text style={styles.adviceTitle}>Consejo del día</Text>
        <View style={styles.exercisesContainer}>
          <Text style={styles.adviceText}>{consejo}</Text>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalContainer}>
              <Text style={styles.titleModal}>Selecciona una meta:</Text>
              <Picker
                placeholder={{}}
                onValueChange={(value) => {
                  setSelectedValue(value);
                }}
                style={styles.picker}
                items={[
                  { label: "Distancia", value: "km" },
                  { label: "Velocidad", value: "vel" },
                ]}
              />

              <TextInput
                style={styles.input}
                placeholder="Ingresa un valor"
                value={inputText}
                onChangeText={setInputText}
              />
              <TouchableHighlight
                onPress={() => {
                  handleMeta(inputText);
                }}
                underlayColor="#DDDDDD"
              >
                <Text>OK</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.x}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                underlayColor="#DDDDDD"
              >
                <Text style={{ fontSize: 20, color: "grey", shadowOpacity: 1 }}>
                  X
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
