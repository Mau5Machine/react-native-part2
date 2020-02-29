import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../assets/images/original.png")}
          fadeDuration={1500}
          source={{
            uri:
              "https://media-cdn.tripadvisor.com/media/photo-s/13/f4/0e/2c/on-the-summit-of-mt-shuksan.jpg"
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.startNewGame}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    marginVertical: 30,
    width: 300,
    height: 300,
    overflow: "hidden"
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultContainer: {
    width: "80%",
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  }
});

export default GameOverScreen;
