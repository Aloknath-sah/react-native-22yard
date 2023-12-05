import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {useDispatch} from 'react-redux'
import {addMember} from '../Redux/action'
import {useNavigation} from '@react-navigation/native'
import {Picker} from '@react-native-picker/picker'

export const AddTeamMember = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [newMember, setMember] = useState({
    name: '',
    position: '',
    phone: '',
    email: '',
  })

  const handleAddMember = () => {
    dispatch(addMember({...newMember, id: Date.now()}))
    navigation.navigate('MemberList')
  }
  return (
    <View>
      {/* Creating Form for user to add new team members */}
      <TextInput
        placeholder="Name"
        value={newMember.name}
        onChangeText={text => setMember({...newMember, name: text})}
        style={styles.TextInput}
        placeholderTextColor="black"
      />
      <Picker
        selectedValue={newMember.position}
        onValueChange={(itemValue, itemIndex) =>
          setMember({...newMember, position: itemValue})
        }
        style={styles.picker}>
        <Picker.Item label="Choose Department" />
        <Picker.Item label="HR" value="HR" />
        <Picker.Item label="Head of engineering" value="Head_of_Enginnering" />
        <Picker.Item label="Head of design" value="Head_of_design" />
      </Picker>
      <TextInput
        placeholder="Phone"
        value={newMember.phone}
        onChangeText={text => setMember({...newMember, phone: text})}
        style={styles.TextInput}
        placeholderTextColor="black"
      />
      <TextInput
        placeholder="Email"
        value={newMember.email}
        onChangeText={text => setMember({...newMember, email: text})}
        style={styles.TextInput}
        placeholderTextColor="black"
      />
      <TouchableOpacity onPress={handleAddMember} style={styles.button}>
        <Text style={styles.buttonText}>Add Team Member</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#D3D3D3',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  TextInput: {
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 15,
    color: 'black',
  },
})
