import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";

import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { useFonts } from "expo-font";

import { AntDesign } from "@expo/vector-icons";

import { UserChat } from "../components";
import { Colors } from "../constants";

const chatsList = [
  {
    id: 1,
    name: "Maria Jose",
    picture:
      "https://us.123rf.com/450wm/fizkes/fizkes2011/fizkes201102042/159430998-foto-de-perfil-de-retrato-en-la-cabeza-de-una-joven-muy-sonriente-posando-en-el-interior-mirando-a-l.jpg?ver=6",
    lastMessage: "¿Como es pa ir al parque? 🌲🎄🌲",
    hour: 1662746407882,
    countMessages: 4,
  },
  {
    id: 2,
    name: "David Angarita",
    picture: "https://avatars.githubusercontent.com/u/273509?v=4",
    lastMessage: "Espero te vaya bien 🙂😊😉",
    hour: 1662746487882,
    countMessages: 2,
  },
  {
    id: 3,
    name: "Ruth Sanchez",
    picture:
      "https://scontent.fbog3-2.fna.fbcdn.net/v/t1.6435-9/123030061_1047570052370310_7820922581959291999_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKarTmBhtxCEjD6HbLkeC9P1F5cXB-8q4_UXlxcH7yrsK-HDePJEwiHdHbbojnn-ls1PP0YJCxXfRACNbK5XQb&_nc_ohc=Drawg9oXrP0AX-8uSsB&_nc_ht=scontent.fbog3-2.fna&oh=00_AT-pNXmstY0Q_nM_ldW_GWWD-4d2xizx90lKiH_dfUFWiA&oe=633FCEC0",
    lastMessage: "Traigame la mayosha Julian 😺😸",
    hour: 1645746487882,
    countMessages: 24,
  },
  {
    id: 4,
    name: "Maria Jose",
    picture:
      "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg",
    lastMessage: "¿Como es pa ir al parque? 🌲🎄🌲",
    hour: 1662746407882,
    countMessages: 4,
  },
  {
    id: 5,
    name: "David Angarita",
    picture: "https://avatars.githubusercontent.com/u/273509?v=4",
    lastMessage: "Espero te vaya bien 🙂😊😉",
    hour: 1662746487882,
    countMessages: 2,
  },
  {
    id: 6,
    name: "Ruth Sanchez",
    picture:
      "https://scontent.fbog3-2.fna.fbcdn.net/v/t1.6435-9/123030061_1047570052370310_7820922581959291999_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKarTmBhtxCEjD6HbLkeC9P1F5cXB-8q4_UXlxcH7yrsK-HDePJEwiHdHbbojnn-ls1PP0YJCxXfRACNbK5XQb&_nc_ohc=Drawg9oXrP0AX-8uSsB&_nc_ht=scontent.fbog3-2.fna&oh=00_AT-pNXmstY0Q_nM_ldW_GWWD-4d2xizx90lKiH_dfUFWiA&oe=633FCEC0",
    lastMessage: "Traigame la mayosha Julian 😺😸",
    hour: 1645746487882,
    countMessages: 24,
  },
  {
    id: 7,
    name: "Maria Jose",
    picture:
      "https://us.123rf.com/450wm/fizkes/fizkes2011/fizkes201102042/159430998-foto-de-perfil-de-retrato-en-la-cabeza-de-una-joven-muy-sonriente-posando-en-el-interior-mirando-a-l.jpg?ver=6",
    lastMessage: "¿Como es pa ir al parque? 🌲🎄🌲",
    hour: 1662746407882,
    countMessages: 4,
  },
  {
    id: 8,
    name: "David Angarita",
    picture: "https://avatars.githubusercontent.com/u/273509?v=4",
    lastMessage: "Espero te vaya bien 🙂😊😉",
    hour: 1662746487882,
    countMessages: 2,
  },
  {
    id: 9,
    name: "Ruth Sanchez",
    picture:
      "https://scontent.fbog3-2.fna.fbcdn.net/v/t1.6435-9/123030061_1047570052370310_7820922581959291999_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKarTmBhtxCEjD6HbLkeC9P1F5cXB-8q4_UXlxcH7yrsK-HDePJEwiHdHbbojnn-ls1PP0YJCxXfRACNbK5XQb&_nc_ohc=Drawg9oXrP0AX-8uSsB&_nc_ht=scontent.fbog3-2.fna&oh=00_AT-pNXmstY0Q_nM_ldW_GWWD-4d2xizx90lKiH_dfUFWiA&oe=633FCEC0",
    lastMessage: "Traigame la mayosha Julian 😺😸",
    hour: 1645746487882,
    countMessages: 24,
  },
  {
    id: 10,
    name: "Maria Jose",
    picture:
      "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg",
    lastMessage: "¿Como es pa ir al parque? 🌲🎄🌲",
    hour: 1662746407882,
    countMessages: 4,
  },
  {
    id: 11,
    name: "David Angarita",
    picture: "https://avatars.githubusercontent.com/u/273509?v=4",
    lastMessage: "Espero te vaya bien 🙂😊😉",
    hour: 1662746487882,
    countMessages: 2,
  },
  {
    id: 12,
    name: "Ruth Sanchez",
    picture:
      "https://scontent.fbog3-2.fna.fbcdn.net/v/t1.6435-9/123030061_1047570052370310_7820922581959291999_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKarTmBhtxCEjD6HbLkeC9P1F5cXB-8q4_UXlxcH7yrsK-HDePJEwiHdHbbojnn-ls1PP0YJCxXfRACNbK5XQb&_nc_ohc=Drawg9oXrP0AX-8uSsB&_nc_ht=scontent.fbog3-2.fna&oh=00_AT-pNXmstY0Q_nM_ldW_GWWD-4d2xizx90lKiH_dfUFWiA&oe=633FCEC0",
    lastMessage: "Traigame la mayosha Julian 😺😸",
    hour: 1645746487882,
    countMessages: 24,
  },
];

export const ChatsList = ({ navigation }: any) => {
  const [areFontsLoaded] = useFonts({
    OpenSans_600SemiBold,
  });

  if (!areFontsLoaded) {
    return <Text>Cargando</Text>;
  }

  return (
    <FlatList
      data={chatsList}
      renderItem={({ item }) => <UserChat navigation={navigation} {...item} />}
      keyExtractor={({ id }) => id.toString()}
      ListHeaderComponent={() => (
        <View>
          <Text style={styles.mainLabel}>Mis Chats</Text>
          <View style={styles.searchBarContainer}>
            <AntDesign
              style={styles.iconSearch}
              name="search1"
              size={12}
              color="black"
            />
            <TextInput
              selectionColor={Colors.primaryDark}
              style={styles.searchBar}
              placeholder="Buscar personas y mensajes"
              onChangeText={(newText) => console.log(newText)}
            />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  mainLabel: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 30,
    fontFamily: "OpenSans_600SemiBold",
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    marginBottom: 10,
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
    borderWidth: 1,
    borderRadius: 15,
  },
  iconSearch: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
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
