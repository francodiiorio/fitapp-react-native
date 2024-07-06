import { Card } from "@rneui/themed";
import styles from "./typeOfExcerciseStyle";

import { View, Text, Image } from "react-native";

export default ({ group: group }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/stretching-exercises.png")}
          />
        </View>

        <View>
          <Text style={styles.text}>{group.name}</Text>
        </View>
      </View>
    </Card>
  );
};
