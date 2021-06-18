import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, MapEvent } from 'react-native-maps';

interface IProps {
  latitude: number;
  longitude: number;
  longPress: (event: MapEvent) => void
}

export const Map = ({ latitude, longitude, longPress }: IProps) => {
  return (
    <MapView style={styles.map} provider={PROVIDER_GOOGLE} onLongPress={event => longPress(event)}
      region={{
        latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421
      }}
    />
  )
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 100,
    width: Dimensions.get('window').width
  }
});
