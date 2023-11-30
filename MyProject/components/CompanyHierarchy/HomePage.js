import React from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export const HomePage = () => {
  const navigation = useNavigation()

  const handleManageEmp = () => {
    navigation.navigate('MemberList')
  }

  const handleManageTeam = () => {
    navigation.navigate('ManageTeam')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleManageTeam}>
        <Text style={styles.buttonText}>Manage Team</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleManageEmp}>
        <Text style={styles.buttonText}>Manage Employee</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    margin: 10,
  },
  btn: {
    justifyContent: 'center',
    padding: 20,
  },
})
