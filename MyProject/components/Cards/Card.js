import React from 'react';
import { StyleSheet } from 'react-native';
import {
    View,
    Text,
  } from 'react-native';

export const Card = () => {
  return (
    <View style={styles.container}>
        <Text>Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      width: 50,
      height: 50,
      margin: 20,
      padding: 20
    },
});
