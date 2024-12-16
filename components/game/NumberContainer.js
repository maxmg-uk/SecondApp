import {View, Text, StyleSheet} from 'react-native'
import Colors from "../../constants/colors";

function NumberContainer({children}) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderwidth: 4,
        bordercolor: 'white',
        padding: 24, 
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText:{ 
        color: Colors.tertiary1,
        fontSize: 32,
        fontWeight: 'bold',
    }
})