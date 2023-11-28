import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addMember } from '../Redux/action';

export const AddTeamMember = ({navigation}) => {

  const dispatch = useDispatch();

  const [newMember, setMember] = useState({
    name: '',
    position: '',
    phone: '',
    email: ''
  })

  const handleAddMember = () => {
    dispatch(addMember({ ...newMember, id: Date.now() }));
    navigation.goBack();
  }
  return (
    <View>
      <TextInput
        placeholder="Name"
        value={newMember.name}
        onChangeText={(text) => setMember({ ...newMember, name: text })}
      />
      <TextInput
        placeholder="Position"
        value={newMember.position}
        onChangeText={(text) => setMember({ ...newMember, position: text })}
      />
      <TextInput
        placeholder="Phone"
        value={newMember.phone}
        onChangeText={(text) => setMember({ ...newMember, phone: text })}
      />
      <TextInput
        placeholder="Email"
        value={newMember.email}
        onChangeText={(text) => setMember({ ...newMember, email: text })}
      />
      <Button title="Add Team Member" onPress={handleAddMember} />
    </View>
  )
}
