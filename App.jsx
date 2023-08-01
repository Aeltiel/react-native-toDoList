import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import appStyle from "./Styles/app.style";
import Header from "./Components/Header";
import Card from "./Components/Card";
import toDoArray from "./Data/Todo.json";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState(toDoArray);

  //fonction pour update le isCompleted des data
  function upDateToDo(todo) {
    //const pour récupéré la todo, en faire une copie et modifié l'attribut voulu
    const updatedToDo = { ...todo, isCompleted: !todo.isCompleted };

    //const pour trouver dans les data la todo équivalent à celle récupéré précédemment
    const indexToUpdate = todoList.findIndex(
      (todo) => todo.id === updatedToDo.id
    );

    //création d'un nouveau tableau qui sera celui mis à jour
    const updatedTodoList = [...todoList];

    updatedTodoList[indexToUpdate] = updatedToDo;
    setTodoList(updatedTodoList);
  }

  //fonction qui permet de boucler sur tableau afin d'afficher les objets dans le composant Card
  function mapToDo() {
    return todoList.map((todo) => (
      <View style={appStyle.cardItem} key={todo.id}>
        <Card onPress={upDateToDo} todo={todo} />
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
