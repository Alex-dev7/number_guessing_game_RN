import { Text, StyleSheet } from "react-native"

function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSans',
        fontSize: 24,
        color: '#a5431f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#a5431f',
        padding: 12,
      }
})