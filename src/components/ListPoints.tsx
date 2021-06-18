import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native';
import { Coordinate } from '../model/Coordinate';

interface IProps {
  points: Coordinate[],
  closeModal: () => void
}

export const ListPoints = ({ points, closeModal }: IProps) => {

  const renderItem = ({ item }: { item: Coordinate }) => <Text>{item.name}</Text>;
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
  list: {
    height: Dimensions.get('window').height - 250
  }
});
