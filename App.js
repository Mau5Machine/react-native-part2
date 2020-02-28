import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="MarketPlace Tracker" />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
