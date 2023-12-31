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
      {/* Homepage to start the user journey */}
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
  button: {
    backgroundColor: 'blue',
    padding: 10, 
    marginVertical: 10,
    width: '50%',
    alignItems: 'center',
    borderRadius: 7
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})
