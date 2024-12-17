import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.tertiary1,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.tertiary1,
    padding: 12,
  },
});
