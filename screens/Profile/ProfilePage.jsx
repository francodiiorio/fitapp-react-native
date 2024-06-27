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
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native'
import { db } from "../../credentials";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

const auth = getAuth(appFirebase);

const ProfilePage = () => {

  const { authData, setAuthData } = useContext(AuthContext)
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation()
  const [dataPie, setDataPie] = useState([]);

  useEffect(() => {
    if (authData){
      const collectionRef = collection(db, 'users', authData.user.uid, 'progress');
    const q = query(collectionRef, where('ejercicio', 'in', ['Ciclismo', 'Running', 'Nadar']));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      let kmBici = 0;
      let kmCorriendo = 0;
      let kmNadando = 0;

      querySnapshot.forEach(doc => {
        const data = doc.data();
        if (data.ejercicio === 'Ciclismo') {
          kmBici += data.km;
        } else if (data.ejercicio === 'Running') {
          kmCorriendo += data.km;
        }else if (data.ejercicio === 'Nadar') {
          kmNadando += data.km;
        }
      });

      setDataPie([
        { name: 'Ciclismo', population: kmBici, color: COLORS.primary, legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Running', population: kmCorriendo, color: '#F004', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Nadar', population: kmCorriendo, color: COLORS.secondary, legendFontColor: '#7F7F7F', legendFontSize: 15 },
      ]);
    });
    return unsubscribe
    }
  }, [])

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
                <PieChart
                  data={dataPie}
                  width={screenWidth * 0.9}
                  height={220}
                  chartConfig={styles.chartConfigPie}
                  accessor="population"
                  backgroundColor="transparent"
                  paddingLeft="15"
                  absolute
                />
              </View>
            </View>
            <View style={styles.chartContainer}>
              
            </View>
            <View style={styles.chartContainer}>
              <View style={styles.chartBox}>
                <LineChart
                  data={dataLine}
                  width={screenWidth * 0.9}
                  height={220}
                  chartConfig={styles.chartConfigLine}
                  bezier
                />
              </View>
            </View>
            <View style={styles.chartContainer}>
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
