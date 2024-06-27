import { Text, View } from "react-native";
import { useContext } from "react"
import { Card } from "@rneui/themed";
import AuthContext from "../../services/AuthContext";


import { db } from "../../credentials";
import { collection, addDoc } from "firebase/firestore";

export default () => {
    const { authData } = useContext(AuthContext)
  return (
    <View>
        <Text>{authData.user.uid}</Text>
    </View>
  );
};