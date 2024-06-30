import { Text, View } from "react-native";
import AuthContext from "../../services/AuthContext";
import styles from "./TrainingItemStyle";


export default function TainingItem({
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