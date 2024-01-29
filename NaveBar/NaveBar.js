import { StyleSheet, Text, View, Image } from "react-native";

function Navebar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logo.png")}
      />
      <Text style={styles.name}>
        SHOPING <Text style={styles.innerName}>APP</Text>
      </Text>
    </View>
  );
}

export default Navebar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 3,
    color: "#696969",
    marginLeft: 10,
  },
  innerName: {
    color: "#008080",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
