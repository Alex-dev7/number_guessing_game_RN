import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
 const [userNumber, setUserNumer] =  useState()
 const [gameOver, setGameOver] = useState(true)

 function pickedNumberHandler(pickedNumber){
  setUserNumer(pickedNumber)
  setGameOver(false)
 }

 function gameOverHandler(){
  setGameOver(true)
 }

 let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>



 if(userNumber) {
  screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
 }

 if(gameOver && userNumber) {
  screen = <GameOverScreen />
 }




  return (
    <LinearGradient colors={['#ddb52f', '#4e0329']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover' 
        style={styles.rootScreen} 
        imageStyle={styles.backgroundImage}
        >
        <SafeAreaView style={styles.rootScreen}>
           {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
  backgroundImage:{
    opacity: 0.15,
  }
});
