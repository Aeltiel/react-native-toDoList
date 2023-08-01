import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import appStyle from "./Styles/app.style";
import Header from "./Components/Header";
import Card from "./Components/Card";
import toDoArray from "./Data/Todo.json";
import { useState } from "react";

export default function App() {
  const [todo, setToDo] = useState(toDoArray);

  function mapToDo() {
    return todo.map((todo) => (
      <View style={appStyle.cardItem} key={todo.id}>
        <Card todo={todo} />
      </View>
    ));
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.container}>
          <View style={appStyle.header}>
            <Header />
          </View>
          <View style={appStyle.body}>
            <ScrollView>{mapToDo()}</ScrollView>
          </View>
          <View style={appStyle.footer}>
            <Text>Footer</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
