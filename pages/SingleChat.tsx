import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Colors } from "../constants";

import {
  OpenSans_300Light,
  OpenSans_500Medium,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

type SingleChatProps = {
  navigation: any;
  name: string;
  picture: string;
};

export const SingleChat = ({
  navigation,
  name,
  picture,
}: SingleChatProps): JSX.Element => {
  const [message, setMessage] = useState("");

  const [areFontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_500Medium,
    OpenSans_700Bold,
  });

  useEffect(() => {
    hideSplashScreen();
  }, [areFontsLoaded]);

  const hideSplashScreen = async () => {
    if (areFontsLoaded) {
      await SplashScreen.hideAsync();
    }
  };

  if (!areFontsLoaded) {
    return null;
  }

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
