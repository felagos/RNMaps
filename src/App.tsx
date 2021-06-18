
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useGeoLocation } from './hooks/useGeoLocation';
import { Map, ModalLocation } from './components';

export const App = () => {
  const { location } = useGeoLocation();
  const { latitude, longitude } = location;

  return (
    <View style={styles.container}>
      <Map latitude={latitude} longitude={longitude} />
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
