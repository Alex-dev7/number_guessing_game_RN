import { View, Text, StyleSheet, Dimensions } from 'react-native'

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
         <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const deviceWidht = Dimensions.get('window').width


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4e0329',
        padding: deviceWidht < 380 ? 12 : 24,
        margin: deviceWidht < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: 'white',
        fontSize:  deviceWidht < 380 ? 28 : 36,
        fontFamily: 'Open-Sans-Bold',
    },
})