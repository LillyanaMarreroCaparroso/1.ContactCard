import React from "react";
import {StyleSheet, Text, View, Image} from 'react-native';


export default function TopComponent() {

    return (
      <View style={styles.container}>
          <Image style={styles.profile} source={require('1-contact-card/assets/lilly.jpg')}/>
          <Text style={styles.name}>Lillyana M. Marrero Caparroso</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {        flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: '#c1ddd5'
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 90      
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15
  }

})





