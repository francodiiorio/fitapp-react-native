import { Text, View } from "react-native";
import { useContext, useEffect, useState } from "react"
import { Card } from "@rneui/themed";
import AuthContext from "../../services/AuthContext";
import styles from "./progressItemStyle";


export default function ProgressItem({
    id,
    km,
    min
}) {
    return(
        <View style={styles.container}>
            <Text>Detalle de ejericio</Text>
            <View style={styles.textWrapper}>
                <Text>{km}km</Text>
                <Text>{min}min</Text>
                
            </View>
        </View>
    )
}