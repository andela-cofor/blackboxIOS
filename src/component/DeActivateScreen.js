/* eslint-disable react/require-extension */
// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, Text, Image } from 'react-native';

// third-party libraries
import Modal from 'react-native-simple-modal';

// common
import { Button, Input } from '../common';

export default class DeActivateScreen extends React.Component {
  state = { showModal: false, password: '' };

  render() {
    const {
      container,
      imageStyle,
      logoText,
      activeText,
      secureButton,
      confirmationTextStyle,
      modalStyle,
      modalPasswordView,
      modalPasswordText,
      modalBottomViewContainer,
      modalCancelText,
      modalDeActivateText
    } = styles;
    return (
      <View style={container}>
        <Image
          style={imageStyle}
          source={require('../../assets/image/blackbox_checkmark.png')}
        />
        <Text style={logoText}>Your device is secure</Text>
        <Text style={activeText}>Blackbox is active</Text>
        <View style={secureButton}>
          <Button
            onPress={() => this.setState({ showModal: true })}
            text='DE-ACTIVATE'
          />
        </View>
        <Modal
          offset={this.state.offset}
          open={this.state.showModal}
          modalDidClose={() => this.setState({ showModal: false })}
          style={modalStyle}
        >
          <View style={{ height: 168 }}>
            <Text
              style={confirmationTextStyle}
            >
              Confirmation
            </Text>
            <View
              style={modalPasswordView}
            >
              <Input
                secureTextEntry
                style={modalPasswordText}
                placeholder='Password'
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <View style={modalBottomViewContainer} >
              <Text
                style={modalCancelText}
                onPress={() => this.setState({ showModal: false })}
              >
                CANCEL
              </Text>
              <Text
                style={modalDeActivateText}
                onPress={() => console.log(this.state.password)}
              >
                DE-ACTIVATE
              </Text>
            </View>
          </View>
        </Modal>
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
  },
  modalStyle: {
    alignItems: 'center'
  },
  confirmationTextStyle: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    marginTop: 10,
    paddingLeft: 15,
    color: '#616161',
    fontWeight: '700'
  },
  modalPasswordView: {
    marginTop: 21,
    height: 33,
    paddingLeft: 5,
  },
  modalPasswordText: {
    fontFamily: 'Avenir-Book',
    color: '#616161',
  },
  modalBottomViewContainer: {
    flexDirection: 'row',
    marginTop: 55,
    marginLeft: 180
  },
  modalCancelText: {
    flex: 1,
    color: '#5c5c5c',
    fontWeight: '700',
    fontFamily: 'AvenirNextCondensed-Bold'
  },
  modalDeActivateText: {
    flex: 2,
    textAlign: 'right',
    paddingRight: 10,
    fontFamily: 'AvenirNextCondensed-Medium',
    color: '#4a4a4a'
  }
});

export { DeActivateScreen };
