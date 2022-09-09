import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import UserChat from "./components/UserChat";

export default function App() {
  return (
    <View style={styles.container}>
      <UserChat />
      <Text style={styles.mainLabel}>
        Open up App.js to start working on your app!
      </Text>
      <TouchableOpacity
        onPress={() => console.log("hola")}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>La buena</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainLabel: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3F8CFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
