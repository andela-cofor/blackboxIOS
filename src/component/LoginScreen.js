// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

// component
import { Input, Button } from '../common';

export default class LoginScreen extends React.Component {
  state = { email: '', password: ''}
  render() {
    const {
      container,
      imageStyle,
      logoText,
      inputViewStyle2,
      inputViewStyle1,
      loginButtonStyle,
      forgotPasswordViewStyle,
      forgotPasswordTextStyle
    } = styles;
    return (
      <View style={container}>
        <Image
          style={imageStyle}
          source={{ uri: 'https://image.ibb.co/mWf9Am/blackbox_logo.png" alt="blackbox_logo' }}
        />
        <Text style={logoText}>Blackbox</Text>
        <View style={inputViewStyle1}>
          <Input
            placeholder='Email Address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View style={inputViewStyle2}>
          <Input
            secureTextEntry
            placeholder='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={loginButtonStyle}>
          <Button
            onPress={() => { console.log(this.state) }}
            text='LOGIN'
          />
        </View>
        <View style={forgotPasswordViewStyle}>
          <Text style={forgotPasswordTextStyle}>Forgot Password</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageStyle: {
    marginTop: 81,
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
  inputViewStyle1: {
    marginTop: 22,
    height: 40,
    width: 250,
    marginBottom: 13
  },
  inputViewStyle2:{
    height: 40,
    width: 250
  },
  loginButtonStyle: {
    paddingTop: 35,
  },
  forgotPasswordViewStyle: {
    marginTop: 40,
    backgroundColor: '#fff',
  },
  forgotPasswordTextStyle: {
    marginTop: 5,
    color: '#a3a3a3',
    fontFamily: 'Avenir-Book',
  },

});

export { LoginScreen };
