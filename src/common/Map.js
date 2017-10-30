import React from 'react';
import { MapView } from 'expo';

class Map extends React.Component {
  render() {
    const { lat, long } = this.props
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

export { Map };
