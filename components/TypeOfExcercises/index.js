import { Card } from "@rneui/themed";

export default ({ group: group }) => {
  return (
    <Card>
      <Card.Title>{group.name}</Card.Title>
    </Card>
  );
};
