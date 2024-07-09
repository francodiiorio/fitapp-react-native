import { Text, View } from "react-native";
import CheckBox from "expo-checkbox";
import styles from "./styles";

export default ({ item }) => {
  return item.type === "km" ? (
    <View style={styles.chartContainer}>
      <View style={styles.chartBox}>
        <Text>
          {"Meta: Superar " + item.value + " " + item.type + " de distancia"}
        </Text>
        <CheckBox value={item.done} style={styles.CheckBox} />
      </View>
    </View>
  ) : (
    <View style={styles.chartContainer}>
      <View style={styles.chartBox}>
        <Text>{"Meta: Superar " + item.value + " km/h de velocidad"}</Text>
        <CheckBox value={item.done} style={styles.CheckBox} />
      </View>
    </View>
  );
};
