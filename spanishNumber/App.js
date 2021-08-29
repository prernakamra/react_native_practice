import React from "react"
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];
const App = () =>{
  return(
     <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")}/>
      <View style={}>
         {soundList.map((sound) => {
           <TouchableOpacity
           key={sound}
           onPress={}
           style={}
           >
            <Text style={}>Press</Text>
           </TouchableOpacity>
         })}

      </View>
     </ScrollView>
  )
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c",
  },
  logo: {
    alignSelf: "center",
    marginTop: 15,
    
  }
})