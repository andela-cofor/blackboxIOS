// react library
import React, { Component } from 'react';

// react-native library
import { Image, StyleSheet, Text, View } from 'react-native';

// third-party libraries
import Modal from 'react-native-simple-modal';

// button
import { LightButton, Input } from '../common';

class SecureScreen extends Component {
  state = { showModal: false, password: '' };

  render() {
    const {
      containerStyle,
      header,
      imageStyle,
      textStyle,
      secureButton,
      modalStyle,
      confirmationTextStyle,
      modalPasswordView,
      modalPasswordText,
      modalBottomViewContainer,
      modalCancelText,
      modalActivateText
    } = styles;
    return (
      <View style={containerStyle}>
        <Image
          style={imageStyle}
          source={{ uri: 'http://image.ibb.co/b2PKFm/blackbox_cancelmark.png" alt="blackbox_logo' }}
        />
        <Text style={header}>Your device is not secure</Text>
        <Text style={textStyle}>Blackbox is not active</Text>
        <View style={secureButton}>
          <LightButton
            onPress={() => this.setState({ showModal: true })}
            text='ACTIVATE'
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
                style={modalActivateText}
                onPress={() => console.log(this.state.password)}
              >
                ACTIVATE
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    );
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
  modalActivateText: {
    flex: 2,
    textAlign: 'right',
    paddingRight: 10,
    fontFamily: 'AvenirNextCondensed-Medium',
    color: '#4a4a4a'
  }
});

export { SecureScreen };
