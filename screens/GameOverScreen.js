import { Image, Text, View, StyleSheet } from "react-native"

import Title from '../components/ui/Title'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({roundsNumber, userNumber, onStartNewGame }) {
  return (
   <View style={styles.rootContainer}>
    <Title style={styles.title}>GAME OVER!</Title>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/images/trophy.jpeg')} />
    </View>
    <Text style={styles.summaryText}>
      Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
    </Text>
    <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
   </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#24bca3',
    borderColor: '#24bca3',
    color: 'white',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'OpenSans',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 24,
  },
  highlight: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: '#ddb52f',
  }
})