import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import UserChat from "./components/UserChat";

const width = Dimensions.get("window").width;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>TalkApp</Text>
      </View>
      <UserChat />
      <TouchableOpacity
        onPress={() => console.log("hola")}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>La buena</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    width: width,
    height: 50,
    backgroundColor: "purple",
  },
  mainLabel: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    marginTop: 15,
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
