import { Text, View } from "react-native";
import { Card } from "@rneui/themed";

import styles from "./excerciseStyle.js"

export default ({ excercise: excercise }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.cardContent} >
        <Text style={styles.text}>{excercise.name}</Text>
      </View>
    </Card>
  );
};
