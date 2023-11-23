import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#ddb52f', '#4e0329']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover' 
        style={styles.rootScreen} 
        imageStyle={styles.backgroundImage}
        >
        <StartGameScreen />
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
