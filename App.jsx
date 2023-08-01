import { Text, View } from "react-native";
import appStyle from "./Styles/app.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.container}>
          <View style={appStyle.header}>
            <Text>Header</Text>
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
