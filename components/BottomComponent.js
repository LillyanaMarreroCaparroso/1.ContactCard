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
