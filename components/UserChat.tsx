import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const UserChat = () => {
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
    <TouchableHighlight onPress={() => console.log("touchs me")}>
      <View style={styles.container}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          }}
        />
        <View>
          <Text style={styles.userName}>Maria Cristina</Text>
          <Text style={styles.message}>Hola Daniel, ¿nos vemos hoy?</Text>
          <Text style={styles.hour}>2:43 pm</Text>
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
    backgroundColor: "red",
    alignItems: "center",
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 50,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  userName: {
    fontSize: 20,
    fontFamily: "OpenSans_600SemiBold",
  },
  message: {
    fontSize: 14,
    fontFamily: "OpenSans_400Regular",
  },
  hour: {
    fontSize: 12,
    fontFamily: "OpenSans_300Light",
  },
});

export default UserChat;
