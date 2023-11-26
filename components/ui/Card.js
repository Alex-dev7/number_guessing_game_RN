import { StyleSheet, View } from "react-native"

function Card({children}) {
  return (
    <View style={styles.card}>
        {children}
    </View>

  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
         marginTop: 36,
         marginHorizontal: 24,
         padding: 16,
         backgroundColor: '#4e0329',
         borderRadius: 8,
         elevation: 4, // shadow for android devices
         shadowColor: 'black',
         shadowOffset: { width: 0, height: 2 },
         shadowRadius: 6,
         shadowOpacity: 0.35,
       },
})