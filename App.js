import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello world</Text>
      <StatusBar style="auto" />
    </View>
  );e
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blackr",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,

  }
});
