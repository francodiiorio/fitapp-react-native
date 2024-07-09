import React, { useContext, useState, useEffect } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginPage from "../Login/LoginPage";
import { getAuth, signOut } from "firebase/auth";
import { appFirebase } from "../../credentials";
import AuthContext from "../../services/AuthContext";
import styles from "./profileStyle";
import { COLORS, SIZES } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Chart from "../../components/Chart/Chart";
import useMeta from "../../hooks/useMeta";
import MetaComponent from "../../components/MetaComponent/MetaComponent";



const auth = getAuth(appFirebase);

const ProfilePage = () => {
  const { authData, setAuthData } = useContext(AuthContext);
  const [isLogued, setIsLogued] = useState();

  const { metas } = useMeta(authData);

  // const [metasActuales, setMetasActuales] = useState();

  // const logued = () => {
  // };

  // useEffect(() => {
  //   if (authData){
  //     setIsLogued(true)
  //   }

  // }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setAuthData(null);
        setIsLogued(false);
        console.log("User signed out!");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <SafeAreaView>
      {authData ? (
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Dashboard</Text>
              <Ionicons.Button
                name="log-out-outline"
                size={20}
                color={COLORS.primary}
                backgroundColor={COLORS.white}
                paddingLeft={18}
                onPress={handleLogout}
              />
            </View>

            <View style={styles.chartContainer}>
              <View style={styles.chartBox}>
                <Text style={styles.title}> SEGUIMIENTO</Text>
                <Chart authData={authData} />
              </View>
            </View>
            <View>
              <Text style={styles.title}> METAS</Text>

              <FlatList
                scrollEnabled={false}
                data={metas}
                renderItem={({ item }) => <MetaComponent item={item} />}
              />
            </View>
          </View>
        </ScrollView>
      ) : (
        <LoginPage />
      )}
    </SafeAreaView>
  );
};

export default ProfilePage;
