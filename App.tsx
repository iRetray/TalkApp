import { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import { OpenSans_700Bold } from "@expo-google-fonts/open-sans";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { Colors } from "./constants";

import { ChatsList } from "./pages/ChatsList";

const width = Dimensions.get("window").width;

const Stack = createNativeStackNavigator();

/* TODO: Create this component in other file */
const UniqueChat = () => {
  return <Text>Hola</Text>;
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [areFontsLoaded] = useFonts({ OpenSans_700Bold });

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: () => (
              <View style={styles.header}>
                <MaterialIcons
                  style={styles.icon}
                  name="voice-chat"
                  size={40}
                  color="white"
                />
                <Text style={styles.textHeader}>TalkApp</Text>
                <View style={styles.configuration}>
                  <TouchableHighlight
                    underlayColor={Colors.primaryDark}
                    style={styles.touchableButton}
                    onPress={() => null}
                  >
                    <Ionicons
                      name="md-settings-sharp"
                      size={24}
                      color="white"
                    />
                  </TouchableHighlight>
                </View>
                <View style={styles.newChat}>
                  <TouchableHighlight
                    underlayColor={Colors.primaryDark}
                    style={styles.touchableButton}
                    onPress={() => null}
                  >
                    <Entypo name="new-message" size={24} color="white" />
                  </TouchableHighlight>
                </View>
              </View>
            ),
          }}
          name="TalkApp"
          component={ChatsList}
        />
        {/* TODO: Design the secondary screen */}
        <Stack.Screen name="UniqueChat" component={UniqueChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    paddingTop: 35,
    paddingBottom: 15,
    position: "relative",
  },
  icon: {
    marginTop: 10,
  },
  textHeader: {
    marginLeft: 10,
    fontSize: 30,
    color: "white",
    fontFamily: "OpenSans_700Bold",
  },
  configuration: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 40,
    marginRight: 10,
  },
  touchableButton: {
    padding: 10,
    borderRadius: 50,
  },
  newChat: {
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: 40,
    marginLeft: 15,
  },
});
