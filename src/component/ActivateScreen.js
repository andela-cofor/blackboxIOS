// react library
import React, { Component } from 'react';

// react-native library
import { View, Text, StyleSheet, Image } from 'react-native';

// common
import { Strong, LightButton } from '../common';

class ActivateScreen extends Component {
  render() {
    const { container, textStyle, imageStyle } = styles;

    return (
      <View style={container}>
        <Image
          style={imageStyle}
          source={{ uri: 'http://image.ibb.co/hAn6d6/blackbox_envelope.png" alt="blackbox_logo' }}
        />
        <Text style={{
          padding: 25,
          color: '#FFF',
          fontSize: 35,
          fontWeight: 'bold'
        }}>
          Awesome!
        </Text>
        <Text style={textStyle}>Once you activate Blackbox, you will receive</Text>
        <Text style={textStyle}>an email to <Strong>john.doe@gmail.com</Strong></Text>
        <Text style={textStyle}>each time a new SIM card is inserted in this</Text>
        <Text style={textStyle}>device, containing the device location</Text>
        <Text style={{ color: '#FFF', paddingBottom: 35 }}>and the SIM card phone number.</Text>
        <LightButton
          onPress={() => console.log('HAHAHA!')}
          text='ACTIVATE'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d4d4d',
    height: '100%',
    flex: 1
  },
  textStyle: {
    color: '#FFF'
  },
  imageStyle: {
    height: 90,
    width: 90,
    alignSelf: 'center',
  }
});

export { ActivateScreen }
