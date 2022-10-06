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





