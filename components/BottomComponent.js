import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import { View, StyleSheet, Text } from 'react-native'

const BottomComponent = () => {
  return (
    <View style={ styles.container }>
        <Text>Mi nombre es Lillyana Margarita Marrero Caparroso, en la actualidad estudio la carrera de turismo y el ciclo superior de desarollo de apliaciones multiplataforma </Text>
        <QRCode value='https://github.com/LillyanaMarreroCaparroso/1.ContactCard.git'></QRCode>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#a25585',
    }
});

export default BottomComponent