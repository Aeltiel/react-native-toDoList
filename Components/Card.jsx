import { Image, Text, TouchableOpacity } from "react-native";
import { cardStyle } from "../Styles/card.style";
import Check from "../assets/check.png";

function Card({ todo, onPress, onLongPress }) {
  return (
    <TouchableOpacity
      style={cardStyle.card}
      onPress={() => onPress(todo)}
      onLongPress={() => onLongPress(todo)}
    >
      <Text
        style={[
          cardStyle.txt,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && <Image style={cardStyle.img} source={Check} />}
    </TouchableOpacity>
  );
}

export default Card;
