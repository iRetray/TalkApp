import { useState } from "react";

import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";

import { Colors } from "../constants";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

type SingleChatProps = {
  navigation: any;
  name: string;
  picture: string;
};

export const SingleChat = (): JSX.Element => {
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require("../assets/background.jpg")}
      />
      <View style={styles.bottomInput}>
        <TouchableHighlight
          underlayColor={Colors.primaryMedium}
          style={styles.buttonAdd}
          onPress={() => null}
        >
          <AntDesign name="pluscircleo" size={30} color={Colors.primary} />
        </TouchableHighlight>
        <TextInput
          multiline
          selectionColor={Colors.primaryDark}
          style={styles.inputText}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Escribe un mensaje"
        />
        <TouchableHighlight
          underlayColor={Colors.primaryMedium}
          style={styles.buttonRecord}
          onPress={() => null}
        >
          {message === "" ? (
            <FontAwesome5
              name="microphone-alt"
              size={25}
              color={Colors.primary}
            />
          ) : (
            <Ionicons name="send" size={24} color={Colors.primary} />
          )}
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  background: {
    position: "absolute",
    height: height,
    width: width,
  },
  buttonAdd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 50,
    width: 50,
  },
  buttonRecord: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 50,
    width: 45,
  },
  bottomInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 0,
    marginTop: "auto",
    paddingHorizontal: 5,
    paddingVertical: 5,
    height: 70,
  },
  inputText: {
    borderColor: Colors.primary,
    borderWidth: 2,
    height: 45,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    marginHorizontal: 5,
    fontFamily: "OpenSans_500Medium",
    fontSize: 15,
  },
});
