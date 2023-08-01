import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import appStyle from "./Styles/app.style";
import Header from "./Components/Header";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.container}>
          <View style={appStyle.header}>
            <Header />
          </View>
          <View style={appStyle.body}>
            <Text>Body</Text>
          </View>
          <View style={appStyle.footer}>
            <Text>Footer</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
