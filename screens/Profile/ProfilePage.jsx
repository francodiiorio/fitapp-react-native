import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginPage from "../Login/LoginPage";

const ProfilePage = () => {
    return (
        <SafeAreaView>
            <LoginPage/>
        </SafeAreaView>
    )
}

export default ProfilePage;