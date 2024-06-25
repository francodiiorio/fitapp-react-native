import React, { useContext } from "react";
import { Text, View, Button,Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginPage from "../Login/LoginPage";
import { getAuth, signOut } from "firebase/auth";
import { appFirebase } from "../../credentials";
import AuthContext from "../../services/AuthContext";
import { LineChart } from "react-native-chart-kit";
import userServices from "../../services/User/userServices";

const auth = getAuth(appFirebase);

const ProfilePage = () => {
  const { authData, setAuthData } = useContext(AuthContext);

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
        <View>
          <Text>Hola! {authData.user?.email}</Text>
          
          <View>
            <LineChart
              data={{
                labels: userServices.fechas,
                datasets: [
                  {
                    data: userServices.porcentajes,
                  },
                ],
              }}
              width={Dimensions.get("window").width - 50} // from react-native
              height={220}
              yAxisLabel={"%"}
              chartConfig={{
                backgroundGradientFrom: "#ff9966",
                backgroundGradientTo: "#ffc7ab",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 78,
                borderRadius: 16,
              }}
            />
          </View>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <LoginPage />
      )}
    </SafeAreaView>
  );
};

export default ProfilePage;
