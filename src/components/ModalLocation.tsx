import React from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';

export const ModalLocation = () => {
	return (
		<Modal animationType='slide' transparent visible>
			<View style={styles.center}>
				<View style={styles.modalView}>
					<Text>test</Text>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalView: {
		backgroundColor: '#fff',
		borderRadius: 4,
		padding: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		}
	}
});
