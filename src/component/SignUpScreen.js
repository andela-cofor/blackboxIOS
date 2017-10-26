// react libraries
import React, { Component } from 'react';

// react-native libraries
import { StyleSheet, View, Text, Image } from 'react-native';

// component
import { LightInput, Button, Strong, LightButton } from '../common';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  };

  render() {
    const {
      imageStyle,
      container,
      logoText,
      inputViewStyle1,
      inputViewStyle2,
    } = styles;
    const { email, password } = this.state

    return (
      <View style={container}>
        <Image
          style={imageStyle}
          source={{ uri: 'http://image.ibb.co/kW9Zd6/padlock.png" alt="blackbox_logo' }}
        />
        <View style={inputViewStyle1}>
          <LightInput
            placeholder='Email Address'
            placeholderTextColor="#959595"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View style={inputViewStyle2}>
          <LightInput
            secureTextEntry
            placeholder='Password'
            placeholderTextColor="#959595"
            value={password}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={{ paddingTop: 35, backgroundColor: 'transparent' }}>
          <LightButton
            onPress={() => { console.log(this.state) }}
            text='SIGN UP'
          />
        </View>
        <View>
          <Text style={{
            color: 'white',
            textAlign: 'center',
            paddingTop: 20
          }}>
            Sign up with an <Strong>accessible</Strong>
          </Text>
          <Text style={{ textAlign: 'center', color: 'white' }}>
            email address and <Strong>secure</Strong> password
          </Text>
        </View>
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
  imageStyle: {
    height: 90,
    width: 90,
    alignSelf: 'center',
  },
  inputViewStyle1: {
    marginTop: 22,
    height: 40,
    width: 250,
    marginBottom: 13,
  },
  inputViewStyle2:{
    height: 40,
    width: 250
  },
})

export { SignUpScreen };
