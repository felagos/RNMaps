import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export const Panel = () => {
  return (
    <View style={styles.panel}>
      <View style={styles.buttons}>
        <Button title="Lista" onPress={() => { }} color={styles.colorBtn.color} />
      </View>
      <View style={styles.buttons}>
        <Button title="Mostrar/Ocultar" onPress={() => { }} color={styles.colorBtn.color} />
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
