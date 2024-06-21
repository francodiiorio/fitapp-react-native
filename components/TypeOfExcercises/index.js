import { Text } from "react-native";
import { Card } from "@rneui/themed";

export default ({ group: group }) => {
  return (
    <Card>
      <Card.Title>{group.type}</Card.Title>
    </Card>
  );
};
