import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import HomePage from "../screens/Home/HomePage";
import ExercisesPage from "../screens/Exercises/ExercisesPage";
import ProfilePage from "../screens/Profile/ProfilePage";

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="Home" 
                component={HomePage} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons 
                                name={focused ? "home" : "home-outline"} 
                                size={24} 
                                color={focused ? COLORS.primary : COLORS.gray}
                            />
                    }
                }}
            />

            <Tab.Screen 
                name="Exercises" 
                component={ExercisesPage} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons 
                                name={focused ? "bicycle" : "bicycle-outline"} 
                                size={28} 
                                color={focused ? COLORS.primary : COLORS.gray}
                            />
                    }
                }}
            />

            <Tab.Screen 
                name="Profile" 
                component={ProfilePage} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons 
                                name={focused ? "person" : "person-outline"} 
                                size={24} 
                                color={focused ? COLORS.primary : COLORS.gray}
                            />
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTabNavigator;