import { Text, TouchableOpacity, View } from "react-native";
import menuStyle from "../Styles/menu.style";

function BottomMenu({ selectedTabName, onPress, todoList }) {
  //tableau retourner trier via reduce pour afficher les taches en fonction de leur état
  const countByStatus = todoList.reduce(
    (acc, todo) => {
      todo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    { all: todoList.length, inProgress: 0, done: 0 }
  );

  function textStyle(tabName) {
    return {
      fontWeight: "bold",
      color: tabName === selectedTabName ? "#2F76E5" : "black",
    };
  }
  return (
    <View style={menuStyle.container}>
      <TouchableOpacity style={menuStyle.btn} onPress={() => onPress("all")}>
        <Text style={textStyle("all")}>All ({countByStatus.all})</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={menuStyle.btn}
        onPress={() => onPress("inProgress")}
      >
        <Text style={textStyle("inProgress")}>
          In Progress ({countByStatus.inProgress})
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={menuStyle.btn} onPress={() => onPress("done")}>
        <Text style={textStyle("done")}>Done ({countByStatus.done})</Text>
      </TouchableOpacity>
    </View>
  );
}
export default BottomMenu;
