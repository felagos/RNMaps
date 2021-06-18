import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';

interface IProps {
  visibility: boolean;
}

export const ModalPoint: React.FC<IProps> = ({ children, visibility }) => {
	return (
		<Modal animationType='slide' transparent visible={visibility}>
			<View style={styles.center}>
				<View style={styles.modalView}>
					{ children }
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
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
