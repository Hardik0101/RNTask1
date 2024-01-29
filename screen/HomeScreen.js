import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <AntDesign name="menu-fold" size={24} color="black" />
      <Image
        style={styles.image}
        source={require("../assets/images/user.png")}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f5fffa",
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});
