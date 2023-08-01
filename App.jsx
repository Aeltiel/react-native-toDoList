import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import appStyle from "./Styles/app.style";
import Header from "./Components/Header";
import Card from "./Components/Card";
import toDoArray from "./Data/Todo.json";

const data = toDoArray;

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.container}>
          <View style={appStyle.header}>
            <Header />
          </View>
          <View style={appStyle.body}>
            <Card todo={data[0]} />
          </View>
          <View style={appStyle.footer}>
            <Text>Footer</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
