// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, Text, Image } from 'react-native';

// common
import { Button } from '../common';

export default class DeActivateScreen extends React.Component {

  render() {
    const { container, imageStyle, logoText, activeText, secureButton } = styles;
    const { navigate } = this.props.navigation;
    return (
      <View style={container}>
        <Image
          style={imageStyle}
          source={{ uri: 'https://image.ibb.co/e6r85m/blackbox_checkmark.png' }}
        />
        <Text style={logoText}>Your device is secure</Text>
        <Text style={activeText}>Blackbox is active</Text>
        <View style={secureButton}>
          <Button
            onPress={() => { navigate('EmptyScreen'); }}
            text='DE-ACTIVATE'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%'
  },
  imageStyle: {
    marginTop: 120,
    height: 140,
    width: 140
  },
  logoText: {
    marginTop: 20,
    fontWeight: '900',
    color: '#6e6e6e',
    fontFamily: 'Avenir-Heavy',
    fontSize: 25,
    backgroundColor: '#fff',
    fontWeight: '800'
  },
  activeText: {
    paddingTop: 4,
    color: '#6e6e6e',
    fontFamily: 'Avenir-Book',
    fontSize: 21
  },
  secureButton: {
    marginTop: 60,
  }
});

export { DeActivateScreen };
