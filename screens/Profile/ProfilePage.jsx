import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginPage from "../Login/LoginPage";
import { getAuth, signOut } from "firebase/auth";
import { appFirebase } from "../../credentials";
import AuthContext from "../../services/AuthContext";

const auth = getAuth(appFirebase)

const ProfilePage = () => {

    const { authData, setAuthData } = useContext(AuthContext)


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
                <View>
                    <Text>Hola! {authData.user?.email}</Text>
                    <Button title="Logout" onPress={handleLogout} />
                </View>
            ) : (
                <LoginPage/>
            )}
        </SafeAreaView>
    )
}

export default ProfilePage;