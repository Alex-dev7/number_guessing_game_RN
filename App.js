import { useState, useEffect, useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font'
// import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


SplashScreen.preventAutoHideAsync()


export default function App() {
 const [userNumber, setUserNumer] =  useState()
 const [gameOver, setGameOver] = useState(true)


 const [fontsLoaded] = useFonts({
  'OpenSans' : require('./assets/fonts/OpenSans-Regular.ttf'),
  'Open-Sans-Bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
 })

 const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
    await SplashScreen.hideAsync();
  }
}, [fontsLoaded]);

if (!fontsLoaded) {
  return null;
}

//  useEffect(() => {
//   async function prepare() {
//     await SplashScreen.preventAutoHideAsync()
//   }

//   prepare()
//  }, [])


//  if(!fontsLoaded){
//   return undefined
//  } else {
//   SplashScreen.hideAsync()
//  }

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
    <LinearGradient colors={['#ddb52f', '#4e0329']} style={styles.rootScreen} onLayout={onLayoutRootView}>
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
