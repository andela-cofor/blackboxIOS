// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, Text, Image, TextVali } from 'react-native';

// component
import { Input, Button } from '../common';

export default class LoginScreen extends React.Component {
  state = { email: '', password: '', error: ''}

  validateInput() {
    const { navigate } = this.props.navigation;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(this.state.email)){
      this.setState({ error: 'Enter a valid email'})
    } else if (this.state.password.length < 8) {
      this.setState({ error: 'Password must be at least 8 characters'})
    } else {
      this.setState({error: ''});
      navigate('EmptyScreen');
    }
  }

  render() {
    const {
      container,
      imageStyle,
      logoText,
      inputViewStyle2,
      inputViewStyle1,
      loginButtonStyle,
      forgotPasswordViewStyle,
      forgotPasswordTextStyle,
      errorTextStyle
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
          <Text style={errorTextStyle}>
            {this.state.error}
          </Text>
        </View>
        <View style={loginButtonStyle}>
          <Button
            onPress={() => {this.validateInput()}}
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
    marginBottom: 23
  },
  inputViewStyle2:{
    height: 40,
    width: 250
  },
  loginButtonStyle: {
    paddingTop: 25,
  },
  forgotPasswordViewStyle: {
    marginTop: 38,
    backgroundColor: '#fff',
  },
  forgotPasswordTextStyle: {
    marginTop: 2,
    color: '#a3a3a3',
    fontFamily: 'Avenir-Book',
    fontSize: 12
  },
  errorTextStyle: {
    backgroundColor: '#fff',
    color: '#cc0000',
    fontSize: 12
  }

});

export { LoginScreen };
