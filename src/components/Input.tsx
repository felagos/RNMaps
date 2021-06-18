import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface IProps {
  title: string;
  placeholder: string;
  onChangeText: (text: string) => void
}

export const Input = ({ title,...rest }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <Text />
      <TextInput {...rest} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
  },
  input: {
    borderBottomColor: 'black'
  }
});
