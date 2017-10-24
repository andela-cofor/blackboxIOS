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
    height: 40,
    width: 180
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

  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: '600',
    paddingTop: 8,
    fontFamily: 'AvenirNextCondensed-DemiBold',
    // fontSize: 20,
  }
});

export { Button };
