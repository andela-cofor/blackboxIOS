// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, Text, Image } from 'react-native';

// third-party libraries
import { Font } from 'expo';

// common
import { Button } from '../common';

export default class LaunchScreen extends React.Component {
  state = { fontLoaded: false };

  async componentWillMount() {
    await Font.loadAsync({
      'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
      'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { container, imageStyle, logoText, purposeText1, purposeText2, secureButton } = styles;
    const { navigate } = this.props.navigation;
    return (
      <View style={container}>
        <Image
          style={imageStyle}
          source={{ uri: 'https://image.ibb.co/mWf9Am/blackbox_logo.png" alt="blackbox_logo' }}
        />
        {
          this.state.fontLoaded ?
            <Text style={logoText}>Blackbox</Text>
            : null
        }
        {
          this.state.fontLoaded ?
            <Text style={purposeText1}>Blackbox protects your device</Text>
            : null
        }
        {
          this.state.fontLoaded ?
            <Text style={purposeText2}>against thefts.</Text>
            : null
        }

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
    backgroundColor: '#fff'
  },
  imageStyle: {
    marginTop: 120,
    height: 100,
    width: 100
  },
  logoText: {
    paddingTop: 30,
    fontWeight: '900',
    color: '#6e6e6e',
    fontSize: 20,
    fontFamily: 'Avenir-Heavy'
  },
  purposeText1: {
    paddingTop: 10,
    color: '#a4a4a4',
    fontFamily: 'Avenir-Book'
  },
  purposeText2: {
    color: '#a4a4a4',
    fontFamily: 'Avenir-Book'
  },
  secureButton: {
    marginTop: 150,
  }
});

export { LaunchScreen };
