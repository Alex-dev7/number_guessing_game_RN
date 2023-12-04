import { Text, StyleSheet, Platform } from "react-native"

function Title({children, style}) {
  return (
    <Text style={[styles.title, style]}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSans',
        fontSize: 24,
        color: '#a5431f',
        textAlign: 'center',
        //borderWidth: Platform.OS === 'android' ? 2 : 0, // using a platform API
        // borderWidth: Platform.select({ios: 2 , android: 3 }), // different way of using the API
        borderWidth: 2, // when using a platform file
        borderColor: '#a5431f',
        padding: 12,
        maxWidth: '80%',
        width: 300,
      }
})