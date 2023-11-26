import { View, Text, StyleSheet } from 'react-native'

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
         <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4e0329',
        // borderWidth: 4,
        // borderColor: '#4e0329',
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },
})