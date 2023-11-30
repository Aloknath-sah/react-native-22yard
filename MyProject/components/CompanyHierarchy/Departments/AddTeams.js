import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'
import {useDispatch} from 'react-redux'
import {addMember} from '../Redux/action'
import {useNavigation} from '@react-navigation/native'
import {Picker} from '@react-native-picker/picker'

export const AddTeams = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [newTeam, setTeam] = useState({
    name: '',
    position: '',
    phone: '',
    email: '',
  });
  console.warn('nav', navigation);

  const handleAddMember = () => {
    dispatch(addMember({...newTeam, id: Date.now()}))
    navigation.navigate('MemberList')
  };
  return (
    <View>
      <TextInput
        placeholder="Name"
        value={newTeam.name}
        onChangeText={text => setTeam({...newTeam, name: text})}
      />
      <Picker
        selectedValue={newTeam.position}
        onValueChange={(itemValue, itemIndex) =>
          setTeam({...newTeam, position: itemValue})
        }
        style={styles.picker}>
        <Picker.Item label="Choose Department" />
        <Picker.Item label="HR" value="HR" />
        <Picker.Item label="Head of engineering" value="Head_of_Enginnering" />
        <Picker.Item label="Head of design" value="Head_of_design" />
      </Picker>
      <TextInput
        placeholder="Phone"
        value={newTeam.phone}
        onChangeText={text => setTeam({...newTeam, phone: text})}
      />
      <TextInput
        placeholder="Email"
        value={newTeam.email}
        onChangeText={text => setTeam({...newTeam, email: text})}
      />
      <Button title="Add Team Member" onPress={handleAddMember} />
    </View>
  );
};
const styles = StyleSheet.create({
  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
})
