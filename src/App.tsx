
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { LatLng, MapEvent } from 'react-native-maps';
import { useGeoLocation } from './hooks/useGeoLocation';
import { Map, ModalPoint, Panel, Input, ListPoints } from './components';
import { Coordinate } from './model/Coordinate';

export const App = () => {
  const [points, setPoints] = useState<Coordinate[]>([]);
  const [name, setName] = useState<string>("");
  const [visibility, setVisibility] = useState<boolean>(false);
  const [pointTemp, setPointTemp] = useState<LatLng>({ latitude: 0, longitude: 0 });
  const [visibilityFilter, setVisibilityFilter] = useState<"new_point" | "all_points">("new_point");
  const { location } = useGeoLocation();

  const { latitude, longitude } = location;

  const handleLongProgress = ({ nativeEvent }: MapEvent) => {
    setPointTemp(nativeEvent.coordinate);
    setVisibility(true);
    setVisibilityFilter('new_point');
  }

  const handleOnChange = (text: string) => {
    setName(text);
  }

  const handleSubmit = () => {
    const newPoint = { coordinate: pointTemp, name };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName('');
  }

  const handleShowList = () => {
    setVisibilityFilter('all_points');
    setVisibility(true);
  }

  const handleCloseModal = () => setVisibility(false);

  return (
    <View style={styles.container}>
      <Map latitude={latitude} longitude={longitude} longPress={handleLongProgress} />
      <Panel onPressLeft={handleShowList} textLeft="Lista" />
      <ModalPoint visibility={visibility}>
        {visibilityFilter === 'new_point' ?
          <>
            <Input title="" placeholder="Nombre del punto" onChangeText={handleOnChange} />
            <View style={{ marginTop: 20 }}>
              <Button title="Aceptar" onPress={handleSubmit} />
            </View>
          </> :
          <ListPoints points={points} closeModal={handleCloseModal} />
        }
      </ModalPoint>
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
