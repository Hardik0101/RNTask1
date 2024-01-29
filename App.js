import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import HomeScreen from "./screen/HomeScreen";
import Navebar from "./NaveBar/NaveBar";
import DataShow from "./Components/DataShow";

export default function App() {
  return (
    <>
      <Navebar />
      <HomeScreen />
      <ScrollView style={styles.rootcontainer}>
        <DataShow />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    marginTop: 20,
  },
});
