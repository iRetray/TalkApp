import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const UserChat = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePicture}
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        }}
      />
      <View>
        <Text style={styles.userName}>Maria Cristina</Text>
        <Text>Hola Daniel, ¿nos vemos hoy?</Text>
      </View>
    </View>
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
    fontSize: 24,
  },
});

export default UserChat;
