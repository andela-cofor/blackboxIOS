// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, Text, Image } from 'react-native';

// common
import { Button } from '../common';

export default class LaunchScreen extends React.Component {

  render() {
    const { container, imageStyle, logoText, purposeText1, purposeText2, secureButton } = styles;
    const { navigate } = this.props.navigation;
    return (
      <View style={container}>
        <Image
          style={imageStyle}
          source={require('../../assets/image/blackbox_logo.png')}
        />
        <Text style={logoText}>Blackbox</Text>
        <Text style={purposeText1}>Blackbox protects your device</Text>
        <Text style={purposeText2}>against thefts.</Text>
        <View style={secureButton}>
          <Button
            onPress={() => { navigate('LoginScreen'); }}
            text='SECURE YOUR PHONE'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: '100%',
    justifyContent: 'center'
  },
  imageStyle: {
    height: 135,
    width: 130
  },
  logoText: {
    paddingTop: 15,
    fontWeight: '900',
    color: '#6e6e6e',
    fontFamily: 'Avenir-Heavy',
    fontSize: 29,
    backgroundColor: '#fff',
    fontWeight: '800'
  },
  purposeText1: {
    paddingTop: 4,
    color: '#a4a4a4',
    fontFamily: 'Avenir-Book',
    fontSize: 18
  },
  purposeText2: {
    color: '#a4a4a4',
    fontFamily: 'Avenir-Book',
    fontSize: 20
  },
  secureButton: {
    marginTop: 108,
  }
});

export { LaunchScreen };
