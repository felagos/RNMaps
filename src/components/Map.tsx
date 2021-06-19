import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, MapEvent, Marker } from 'react-native-maps';
import { Coordinate } from '../model/Coordinate';

interface IProps {
  latitude: number;
  longitude: number;
  longPress: (event: MapEvent) => void,
  points: Coordinate[],
  pointsFilter: boolean
}

export const Map = ({ latitude, longitude, longPress, points, pointsFilter }: IProps) => {
  return (
    <MapView style={styles.map} provider={PROVIDER_GOOGLE} onLongPress={event => longPress(event)}
      region={{
        latitude, longitude, latitudeDelta: 0.09422, longitudeDelta: 0.9
      }}
    >
      {
        pointsFilter && points.map(point => <Marker key={point.name} coordinate={point.coordinate} title={point.name} />)
      }
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 100,
    width: Dimensions.get('window').width
  }
});
