// react library
import React, { Component } from 'react';

// react-native library
import { Image, StyleSheet, Text, View } from 'react-native';

// button
import { Button } from '../common';

class SecureScreen extends Component {
  render() {
    const { containerStyle, header, imageStyle, textStyle } = styles;
    return (
      <View style={containerStyle}>
        <Image
          style={imageStyle}
          source={{ uri: 'http://image.ibb.co/b2PKFm/blackbox_cancelmark.png" alt="blackbox_logo' }}
        />
        <Text style={header}>Your device is not secure</Text>
        <Text style={textStyle}>Blackbox is not active</Text>
        <Button
          onPress={() => console.log('HAHAHA!')}
          text='ACTIVATE'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: '100%',
    flex: 1
  },
  header: {
    color: '#4d4d4d',
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 7
  },
  textStyle: {
    color: '#4d4d4d',
    fontSize: 17,
    fontWeight: '300',
    marginBottom: 35
  },
  imageStyle: {
    height: 90,
    width: 90,
    alignSelf: 'center',
    margin: 30
  }
});

export { SecureScreen };
