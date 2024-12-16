import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { SafeAreaView as SafeAreaViewAndroid} from "react-native-safe-area-context";
import {LinearGradient} from 'expo-linear-gradient'
import Colors from "./constants/colors.js";

import StartGameScreen from "./screens/StartGameScreen.js";
import GameScreen from "./screens/GameScreen.js";
import GameOverScreen from "./screens/GameOverScreen.js";


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true)
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }



  return (
    <LinearGradient colors={[Colors.primary500, Colors.highlight]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaViewAndroid style={styles.rootScreen}>{screen}</ SafeAreaViewAndroid>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
