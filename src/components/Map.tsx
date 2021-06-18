import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

interface IProps {
	latitude: number;
	longitude: number;
}

export const Map = ({ latitude, longitude }: IProps) => {
	return (
		<MapView style={styles.map} provider={PROVIDER_GOOGLE}
			region={{
				latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421
			}}
		/>
	)
}

const styles = StyleSheet.create({
	map: {
		height: Dimensions.get('window').height - 150,
		width: Dimensions.get('window').width
	}
});