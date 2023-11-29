import React from 'react'
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const HomePage = () => {
    const navigation = useNavigation();

    const handleManageEmp = () => {
        navigation.navigate('ManageTeam');
    }

    const handleManageTeam = () => {
        navigation.navigate('AddMember');
    }
  return (
    <View>
        <Button title='Manage Team' onPress={handleManageTeam} />
        <Button title='Manage Employee' onPress={handleManageEmp} />
    </View>
  )
}
