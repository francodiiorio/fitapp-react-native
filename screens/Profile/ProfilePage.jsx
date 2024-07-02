import React, { useContext, useState, useEffect } from "react";
import { Text, View, Button, Dimensions, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginPage from "../Login/LoginPage";
import { getAuth, signOut } from "firebase/auth";
import { appFirebase } from "../../credentials";
import AuthContext from "../../services/AuthContext";
import styles from "./profileStyle"
import { COLORS, SIZES } from "../../constants"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { LineChart } from 'react-native-chart-kit'

import Chart from '../../components/Chart/Chart'

const auth = getAuth(appFirebase);

const ProfilePage = () => {


  const { authData, setAuthData } = useContext(AuthContext)
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation()
  
  const dataLine = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => COLORS.primary, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setAuthData(null);
        console.log("User signed out!");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };



  return (
    <SafeAreaView>
      {authData ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Dashboard</Text>
            <Ionicons.Button name="log-out-outline" size={20} color={COLORS.primary} backgroundColor={COLORS.white} paddingLeft={18} onPress={handleLogout} />
          </View>
          <ScrollView contentContainerStyle={styles.ScrollView}>
            <View style={styles.chartContainer}>
              <View style={styles.chartBox}>
                <Chart authData={authData}/>
              </View>
            </View>
            
          </ScrollView>
        </View>
      ) : (
        <LoginPage />
      )}
    </SafeAreaView>
  )
}

export default ProfilePage;
