import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import HomeScreen from "./screen/HomeScreen";
import Navebar from "./NaveBar/NaveBar";
import DataShow from "./Components/DataShow";
import Horizontal from "./Components/Horizontal";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.rootcontainer}>
        <Navebar />
        <HomeScreen />
      </View>
      <ScrollView
        style={{ padding: 5, marginBottom: 12 }}
        contentContainerStyle={{ marginHorizontal: 20, marginBottom: 12 }}
      >
        <DataShow />
        <Horizontal />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    marginTop: 2,
  },
});
