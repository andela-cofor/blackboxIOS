// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// third-party libraries
import { Font } from 'expo';

export default class Button extends React.Component {
  state = { fontLoaded: false };

  async componentWillMount() {
    await Font.loadAsync({
      'AvenirNextCondensed-DemiBold':
        require('../../assets/fonts/AvenirNextCondensed-DemiBold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { onPress, text } = this.props;
    const { buttonStyle, buttonTextStyle, container } = styles;
    return (
      <View style={container}>
        {
          this.state.fontLoaded ?
            <TouchableOpacity onPress={onPress} style={buttonStyle} >
              <Text style={buttonTextStyle} >
                {text}
              </Text>
            </TouchableOpacity>
            : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 180,
    backgroundColor: '#fff'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#5c5c5c',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#5c5c5c',
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: '700',
    paddingTop: 9,
    fontFamily: 'AvenirNextCondensed-DemiBold',
    fontSize: 15
  }
});

export { Button };
