import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.container}>
      <Title>Game Over! </Title>
      <Text style={styles.subtitleText}>
        Your phone guessed your number:
        <Text style={styles.highlightText}> {userNumber}</Text> in 
        <Text style={styles.highlightText}> {roundsNumber}</Text> rounds!
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: Colors.secondary1,
  },
  titleText: {
    fontSize: 32,
  },
  subtitleText: {
    margin: 16,
    fontSize: 24,
    textAlign: "center",
  },
  highlightText: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});
