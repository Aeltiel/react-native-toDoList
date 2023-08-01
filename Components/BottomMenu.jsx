import { Text, TouchableOpacity, View } from "react-native";
import menuStyle from "../Styles/menu.style";

function BottomMenu({ selectedTabName, onPress }) {
  function textStyle(tabName) {
    return {
      fontWeight: "bold",
      color: tabName === selectedTabName ? "#2F76E5" : "black",
    };
  }
  return (
    <View style={menuStyle.container}>
      <TouchableOpacity style={menuStyle.btn} onPress={() => onPress("all")}>
        <Text style={textStyle("all")}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={menuStyle.btn}
        onPress={() => onPress("inProgress")}
      >
        <Text style={textStyle("inProgress")}>In Progress</Text>
      </TouchableOpacity>

      <TouchableOpacity style={menuStyle.btn} onPress={() => onPress("done")}>
        <Text style={textStyle("done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
export default BottomMenu;
