import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useSafeAreaFrame } from "react-native-safe-area-context";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(() =>
    generateRandomBetween(minBoundary, maxBoundary)
  );

  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that's wrong", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.instructionText}>Higher or lower? </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              +
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.guessLogContainer}>
        {guessRounds.map((guessRound) => (
          <Text style={styles.guessLogText} key={guessRound}>
            {guessRound}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    fontSize: 24,
    textAlign: "center",
  },
  guessLogText: {
    fontSize: 14,
  },
  guessLogContainer: {
    flex: 1,
    alignItems: 'center' ,
  },
});
