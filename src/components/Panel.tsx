import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

interface IProps {
  onPressLeft: () => void,
  textLeft: string;
  togglePointsFilter: () => void
}

export const Panel = ({ onPressLeft, textLeft, togglePointsFilter }: IProps) => {
  return (
    <View style={styles.panel}>
      <View style={styles.buttons}>
        <Button title={textLeft} onPress={onPressLeft} color={styles.colorBtn.color} />
      </View>
      <View style={styles.buttons}>
        <Button title="Mostrar/Ocultar" onPress={togglePointsFilter} color={styles.colorBtn.color} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttons: {
    margin: 10
  },
  colorBtn: {
    color: '#9C27B0'
  }
});
