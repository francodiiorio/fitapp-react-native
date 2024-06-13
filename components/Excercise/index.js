import { Text } from "react-native";
import { Card } from "@rneui/themed";


export default ({ excercise: excercise }, { group: group }) => {
  if (excercise != null) {
    return (
      <Card>
        <Card.Title>{excercise.name}</Card.Title>
        <Card.Divider></Card.Divider>
        <Text> {excercise.type}</Text>
      </Card>
    );
  } else {
    return (
      <Card>
        <Card.Title>{group}</Card.Title>
        <Card.Divider></Card.Divider>
        <Text> {group}</Text>
      </Card>
    );
  }
};

// export default ({ excercise: excercise }) => {
//   return (
//     <Card>
//       <Card.Title>{excercise.name}</Card.Title>
//       <Card.Divider></Card.Divider>
//       <Text> {excercise.type}</Text>
//     </Card>
//   );
// };
