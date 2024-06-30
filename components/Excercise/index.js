import { Text } from "react-native";
import { Card } from "@rneui/themed";
export default ({ excercise: excercise }) => {
  return (
    <Card>
      <Card.Title>{excercise.name}</Card.Title>
      <Card.Divider></Card.Divider>
    </Card>
  );
};