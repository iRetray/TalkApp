import { Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from "@react-navigation/native-stack";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "./constants";

import { ChatsList, SingleChat } from "./pages";
import { FontsLoader } from "./containers/FontsLoader";
import { UserType } from "./types/UserType";

const width = Dimensions.get("window").width;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FontsLoader>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              header: () => (
                <View style={styles.header}>
                  <MaterialCommunityIcons
                    style={styles.icon}
                    name="message-draw"
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
            name="Home"
            component={ChatsList}
          />
          <Stack.Screen
            options={{
              animation: "slide_from_right",
              header: ({ navigation, route }: NativeStackHeaderProps) => {
                const { name, picture }: UserType = route.params;
                return (
                  <View style={styles.header}>
                    <Image
                      style={styles.profilePicture}
                      source={{
                        uri: picture,
                      }}
                    />
                    <View>
                      <Text style={styles.userName}>{name}</Text>
                      <Text style={styles.lastHour}>
                        Ultima vez a las 3:45pm
                      </Text>
                    </View>
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
                        onPress={() => navigation.navigate("Home")}
                      >
                        <Ionicons name="arrow-back" size={24} color="white" />
                      </TouchableHighlight>
                    </View>
                  </View>
                );
              },
            }}
            name="SingleChat"
            component={SingleChat}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FontsLoader>
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
    paddingTop: 15,
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
    marginTop: 25,
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
    marginTop: 25,
    marginLeft: 15,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  userName: {
    fontSize: 20,
    color: "white",
    fontFamily: "OpenSans_500Medium",
  },
  lastHour: {
    fontSize: 12,
    color: "white",
    fontFamily: "OpenSans_300Light",
  },
});
