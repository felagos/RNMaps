
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useGeoLocation } from './hooks/useGeoLocation';
import { Map, ModalLocation, Panel } from './components';
import { MapEvent } from 'react-native-maps';
import { Coordinate } from './model/Coordinate';

export const App = () => {
  const [points, setPoints] = useState<Coordinate[]>([]);
  const { location } = useGeoLocation();
  const { latitude, longitude } = location;

  const handleLongProgress = ({ nativeEvent }: MapEvent) => {
    const newPoints = points.concat({ coordinate: nativeEvent.coordinate })
    setPoints(newPoints);
  }

  return (
    <View style={styles.container}>
      <Map latitude={latitude} longitude={longitude} longPress={handleLongProgress} />
      <Panel />
      <ModalLocation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  }
});
