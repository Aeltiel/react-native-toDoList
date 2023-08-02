import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import appStyle from "./Styles/app.style";
import Header from "./Components/Header";
import Card from "./Components/Card";
import BottomMenu from "./Components/BottomMenu";
import toDoArray from "./Data/Todo.json";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState(toDoArray);
  const [selectedTabName, setSelectedTabName] = useState("all");

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

  //function pour récupéré le tableau de tache filtrer
  function filteredList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "done":
        return todoList.filter((todo) => todo.isCompleted);
    }
  }

  //function pour supprimer une todo
  function deleteTodo(todo) {
    Alert.alert("Suppression", "Supprimer cette tâche ?", [
      //les deux paire d'accolade correspondent aux boutons présent dans l'alert
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => {
          setTodoList(todoList.filter((todoD) => todo.id !== todoD.id));
        },
      },
      {
        text: "Annuler",
        style: "cancel",
      },
    ]);
  }

  //fonction qui permet de boucler sur tableau afin d'afficher les objets dans le composant Card
  function mapToDo() {
    return filteredList().map((todo) => (
      <View style={appStyle.cardItem} key={todo.id}>
        <Card onPress={upDateToDo} todo={todo} onLongPress={deleteTodo} />
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
            <BottomMenu
              selectedTabName={selectedTabName}
              onPress={setSelectedTabName}
              todoList={todoList}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
