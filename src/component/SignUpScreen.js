// react libraries
import React, { Component } from 'react';

// react-native libraries
import { StyleSheet, View, Text, Image } from 'react-native';

// component
import { LightInput, Button, Strong, LightButton } from '../common';

// third-party libraries
import Toast from 'react-native-easy-toast'

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailErrorMessage: '',
      passwordErrorMessage: ''
    };
  };

  validateInput() {
    this.setState({
      emailErrorMessage: '',
      passwordErrorMessage: ''
    });
    const { navigate } = this.props.navigation;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let password_re = /^[a-z0-9]+$/i;
    if(!re.test(this.state.email)){
      this.setState({ emailErrorMessage: 'Enter a valid email' });
      this.refs.toast.show('Enter a valid email');
      return false;
    }
    if (this.state.password.length < 8) {
      this.setState({ passwordErrorMessage: 'Password must be at least 8 characters' })
      this.refs.toast.show('Password must be at least 8 characters');
      return false;
    }
    if (!password_re.test(this.state.password)) {
      this.setState({ passwordErrorMessage: 'No special character allowed' });
      this.refs.toast.show('No special character allowed');
      return false;
    }
    if(re.test(this.state.email) && this.state.password.length > 7) {
      navigate('EmptyScreen');
      return true;
    }
  }

  render() {
    const {
      imageStyle,
      container,
      inputViewStyle1,
      inputViewStyle2,
      errorTextStyle
    } = styles;
    const { email, password } = this.state;

    return (
      <View style={container}>
        <Toast ref="toast" />
        <Image
          style={imageStyle}
          source={require('../../assets/image/padlock.png')}
        />
        <View style={inputViewStyle1}>
          <LightInput
            placeholder='Email Address'
            placeholderTextColor="#959595"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
          <Text style={errorTextStyle}>
            {this.state.emailErrorMessage}
          </Text>
        </View>
        <View style={inputViewStyle2}>
          <LightInput
            secureTextEntry
            placeholder='Password'
            placeholderTextColor="#959595"
            value={password}
            onChangeText={password => this.setState({ password })}
          />
          <Text style={errorTextStyle}>
            {this.state.passwordErrorMessage}
          </Text>
        </View>
        <View style={{ paddingTop: 35, backgroundColor: 'transparent' }}>
          <LightButton
            onPress={() => {this.validateInput()}}
            text='SIGN UP'
          />
        </View>
        <View>
          <Text style={{
            color: '#FFF',
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
  errorTextStyle: {
    backgroundColor: 'transparent',
    color: 'pink',
    fontSize: 12
  }
})

export { SignUpScreen };
