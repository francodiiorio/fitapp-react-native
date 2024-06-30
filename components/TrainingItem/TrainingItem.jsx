import { Text, View } from "react-native";
import AuthContext from "../../services/AuthContext";
import styles from "./TrainingItemStyle";


export default function TainingItem({
    id,
    km,
    min,
    vel
}) {
    return(
        <View style={styles.container}>
            <Text>Detalle de ejericio</Text>
            <View style={styles.textWrapper}>
                <Text>Distancia: {km}km</Text>
                <Text>Tiempo: {min}min</Text>
                <Text>Vel. promedio:{vel}km/min</Text>
            </View>
        </View>
    )
}