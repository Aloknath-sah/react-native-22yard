import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addMember } from '../Redux/action';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

export const AddTeamMember = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [newMember, setMember] = useState({
    name: '',
    position: '',
    phone: '',
    email: ''
  })
  console.warn("nav", navigation);

  const handleAddMember = () => {
    dispatch(addMember({ ...newMember, id: Date.now() }));
    navigation.navigate('MemberList');
  }
  return (
    <View>
      <TextInput
        placeholder="Name"
        value={newMember.name}
        onChangeText={(text) => setMember({ ...newMember, name: text })}
      />
      <Picker
        selectedValue={newMember.position}
        onValueChange={(itemValue, itemIndex) => setMember({ ...newMember, position: itemValue })}
        style={styles.picker}
      >
        <Picker.Item label="Choose Department" />
        <Picker.Item label="HR" value="HR" />
        <Picker.Item label="Head of engineering" value="Head_of_Enginnering" />
        <Picker.Item label="Head of design" value="Head_of_design" />
      </Picker>
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
const styles = StyleSheet.create({
  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
