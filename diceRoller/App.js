import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () =>{
  const [uri, setUri] = useState(DiceOne);
  const [uri1, setUri1] = useState(DiceOne);
 const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber){
      case 1:
        setUri(DiceOne);
        if(randomNumber1===1){randomNumber1 = randomNumber1-1};
        break;
      case 2:
        setUri(DiceTwo);
        if(randomNumber1===2){randomNumber1 = randomNumber1-1};
        break;
      case 3:
        setUri(DiceThree);
        if(randomNumber1===3){randomNumber1 = randomNumber1-1};
        break;
      case 4:
        setUri(DiceFour);
        if(randomNumber1===4){randomNumber1 = randomNumber1-1};
        break;
      case 5:
        setUri(DiceFive);
        if(randomNumber1===5){randomNumber1 = randomNumber1-1};
        break;
      case 6:
        setUri(DiceSix);
        if(randomNumber1===6){randomNumber1 = randomNumber1-1};
        break;
      default:
        setUri(DiceThree);
        if(randomNumber1===3){randomNumber1 = randomNumber1-1};
        break;
    }
    switch (randomNumber1){
      case 1:
        setUri1(DiceOne);
        break;
      case 2:
        setUri1(DiceTwo);
        break;
      case 3:
        setUri1(DiceThree);
        break;
      case 4:
        setUri1(DiceFour);
        break;
      case 5:
        setUri1(DiceFive);
        break;
      case 6:
        setUri1(DiceSix);
        break;
      default:
        setUri1(DiceThree);
        break;
    }
 };
  return(
    <View style = {styles.container}>
    <Image style={styles.image} source={uri} />
    <Image style={styles.image} source={uri1} />
        <Pressable onPress={playButtonTapped}>
           <Text style={styles.gamePlayButton}>Play Game</Text>
       </Pressable>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",

  },
  image: {
    width: 200,
    height: 200,

  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: "#F2A365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475E",
    borderWidth: 3,
    borderRadius: 15,
  },
});

