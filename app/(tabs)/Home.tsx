import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, Platform, SafeAreaView } from "react-native";

export default function ListScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 25, fontWeight: "500", color: "white" }}>
        Eplore
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
