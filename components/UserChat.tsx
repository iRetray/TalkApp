import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

import {
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";
import { useFonts } from "expo-font";
import { Colors } from "../constants";

import moment from "moment";

const width = Dimensions.get("window").width;

type UserChatProps = {
  navigation: any;
  name: string;
  picture: string;
  lastMessage: string;
  hour: number;
  countMessages: number;
};

export const UserChat = ({
  navigation,
  name,
  picture,
  lastMessage,
  hour,
  countMessages,
}: UserChatProps) => {
  const [areFontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
  });

  if (!areFontsLoaded) {
    return <Text>Cargando</Text>;
  }

  return (
    <TouchableHighlight
      underlayColor={Colors.primaryLight}
      onPress={() => navigation.navigate("UniqueChat")}
    >
      <View style={styles.container}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: picture,
          }}
        />
        <View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{name}</Text>
            <View style={styles.dot} />
          </View>
          <Text style={styles.message}>{lastMessage}</Text>
          <Text style={styles.hour}>{moment(hour).format("h:mm a")}</Text>
        </View>
        <View style={styles.countMessages}>
          <Text style={styles.number}>{countMessages}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: width,
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-start",
    alignSelf: "flex-start",
    height: 100,
    alignItems: "center",
    position: "relative",
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 50,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  userNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 20,
    marginRight: 5,
    fontFamily: "OpenSans_600SemiBold",
  },
  dot: {
    backgroundColor: Colors.success,
    height: 10,
    width: 10,
    borderRadius: 50,
  },
  message: {
    fontSize: 14,
    maxWidth: 220,
    fontFamily: "OpenSans_400Regular",
  },
  hour: {
    fontSize: 12,
    fontFamily: "OpenSans_300Light",
  },
  countMessages: {
    position: "absolute",
    backgroundColor: Colors.alert,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
    marginRight: 20,
    marginTop: 40,
    height: 22,
    width: 22,
    borderRadius: 50,
  },
  number: {
    color: "white",
    fontSize: 12,
    fontFamily: "OpenSans_600SemiBold",
  },
});
