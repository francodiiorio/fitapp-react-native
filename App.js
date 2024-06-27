import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LoginPage from "./screens/Login/LoginPage";
import ExcerciseListPage from "./screens/ExcerciseList/ExcerciseListPage";
import RegisterPage from "./screens/Register/RegisterPage";
import SettingsPage from "./screens/Profile/SettingsPage";

import { useEffect, useState } from "react";
import { appFirebase, auth } from "./credentials";
import AuthContext, { defaultAuthData } from "./services/AuthContext";
import AsyncStorage from "./services/AsyncStorage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ExerciseDetailPage from "./screens/ExcerciseDetail/ExcerciseDetailPage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [authData, setAuthData] = useState(defaultAuthData);

  useEffect(() => {
    AsyncStorage.getData("authData").then((data) => {
      console.log("Encontro algo???", data);
      if (data) {
        setAuthData(data);
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (authData) {
        console.log("Usuario logueado");
        AsyncStorage.storeData("authData", authData);
      } else {
        console.log("Usuario deslogueado");
        AsyncStorage.clearAll();
      }
    });
  }, [authData]);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Navigation"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExcerciseListPage"
            component={ExcerciseListPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterPage"
            component={RegisterPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExcerciseDetailPage"
            component={ExerciseDetailPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SettingsPage"
            component={SettingsPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
