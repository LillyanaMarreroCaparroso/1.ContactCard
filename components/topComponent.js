import React from "react";
import {StyleSheet, Text, View, Image} from 'react-native';


export default function TopComponent() {

    return (
      <View style={styles.container}>
        <Image style={styles.background} source={require('1-contact-card/assets/fondo.png')}/>
        <Image style={styles.profile} source={require('1-contact-card/assets/lilly.jpg')}/>
        <Text style={styles.name}>Lillyana M. Marrero Caparroso</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "withe"
    },
    background: {

    },
    profile: {
        height: 100,
        width: 100,
        borderRadius: 90
    },
    name: {

    }

})



