
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useGeoLocation } from './hooks/useGeoLocation';

export const App = () => {
  const { location } = useGeoLocation();
  const { latitude, longitude } = location;

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE}
        region={{
          latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421
        }}
        zoomControlEnabled
        zoomTapEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff'
  }
});
