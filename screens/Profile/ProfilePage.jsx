import React, { useContext } from "react";
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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

const auth = getAuth(appFirebase)

const ProfilePage = () => {

  const { authData, setAuthData } = useContext(AuthContext)
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation()
  const dataPie = [
    { name: 'GYM', population: 15, color: COLORS.primary, legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Cardio', population: 8, color: '#F004', legendFontColor: '#7F7F7F', legendFontSize: 15 },

  ];
  const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
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
        setAuthData(null)
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
            <Ionicons.Button name="settings-outline" size={20} color={COLORS.primary} backgroundColor={COLORS.white} paddingLeft={18} onPress={()=>{navigation.navigate('SettingsPage')}} />
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
              <View style={styles.chartBox}>
                <BarChart
                  data={dataBar}
                  width={screenWidth * 0.9}
                  height={220}
                  yAxisLabel="$"
                  chartConfig={styles.chartConfigBar}
                  verticalLabelRotation={30}
                />
              </View>
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
              <View style={styles.chartBox}>
               
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