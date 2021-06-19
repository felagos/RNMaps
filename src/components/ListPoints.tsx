import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native';
import { Coordinate } from '../model/Coordinate';

interface IProps {
  points: Coordinate[],
  closeModal: () => void
}

export const ListPoints = ({ points, closeModal }: IProps) => {

  const renderItem = ({ item }: { item: Coordinate }) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  const getKeyIterator = (item: Coordinate) => item.name;

  return (
    <>
      <View style={styles.list}>
        <FlatList data={points} renderItem={renderItem} keyExtractor={getKeyIterator} />
      </View>
      <View>
        <Button title='Cerrar' onPress={closeModal} />
      </View>
    </>
  );

}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 15
  },
  list: {
    height: Dimensions.get('window').height - 250
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
    padding: 15
  }
});
