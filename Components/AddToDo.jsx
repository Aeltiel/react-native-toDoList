import { TouchableOpacity, Text } from "react-native";
import addToDoStyle from "../Styles/addToDo.style";

function AddToDo({ onPress }) {
  return (
    <TouchableOpacity style={addToDoStyle.btn} onPress={onPress}>
      <Text style={addToDoStyle.txt}>+ New todo</Text>
    </TouchableOpacity>
  );
}

export default AddToDo;
