import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import VerticalScrollData from "../Components/VerticalScrollData";
import HorizontalScrollData from "../Components/HorizontalScrollData";
import HeaderComponent from "../Components/HeaderComponent";

function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#f5fffa" }}>
      <HeaderComponent />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <AntDesign name="menu-fold" size={24} color="black" />
          <Image
            style={styles.image}
            source={require("../assets/images/user.png")}
          />
        </View>
        <VerticalScrollData />
        <HorizontalScrollData />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    margin: 8,
    marginBottom: 60,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});
