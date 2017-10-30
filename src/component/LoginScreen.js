/* eslint-disable no-useless-escape,react/require-extension */
// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, Text, Image } from 'react-native';

// component
import { Input, Button } from '../common';

export default class LoginScreen extends React.Component {
  state = { email: '', password: '', passwordErrorMessage: '', emailErrorMessage: '' }

  validateInput() {
    const { navigate } = this.props.navigation;
// eslint-disable-next-line max-len
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.state.email)) {
      this.setState({ emailErrorMessage: 'Enter a valid email' });
    }
    if (this.state.password.length < 8) {
      this.setState({ passwordErrorMessage: 'Password must be at least 8 characters' });
    }
    if (re.test(this.state.email)) {
      this.setState({ emailErrorMessage: '' });
    }
    if (this.state.password.length > 7) {
      this.setState({ passwordErrorMessage: '' });
    }
    if (re.test(this.state.email) && this.state.password.length > 7) {
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
          source={require('../../assets/image/blackbox_logo.png')}
        />
        <Text style={logoText}>Blackbox</Text>
        <View style={inputViewStyle1}>
          <Input
            placeholder='Email Address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <Text style={errorTextStyle}>
            {this.state.emailErrorMessage}
          </Text>
        </View>
        <View style={inputViewStyle2}>
          <Input
            secureTextEntry
            placeholder='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <Text style={errorTextStyle}>
            {this.state.passwordErrorMessage}
          </Text>
        </View>
        <View style={loginButtonStyle}>
          <Button
            onPress={() => { this.validateInput(); }}
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
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#FFF'
  },
  imageStyle: {
    height: 135,
    width: 130
  },
  logoText: {
    paddingTop: 15,
    color: '#6e6e6e',
    fontFamily: 'Avenir-Heavy',
    fontSize: 29,
    backgroundColor: '#fff',
    fontWeight: '800'
  },
  inputViewStyle1: {
    marginTop: 37,
    height: 40,
    width: 250,
    marginBottom: 15
  },
  inputViewStyle2: {
    height: 40,
    width: 250
  },
  loginButtonStyle: {
    paddingTop: 25,
  },
  forgotPasswordViewStyle: {
    marginTop: 5,
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
