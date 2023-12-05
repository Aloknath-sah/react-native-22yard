import React, {useState} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Modal,
  Button,
} from 'react-native'
import {updateMemberAction} from '../Redux/action'
import {Picker} from '@react-native-picker/picker'
import {useDispatch} from 'react-redux'

export const UpdateMember = ({visible, onClose, memberData}) => {
  const dispatch = useDispatch()
  const [updateMember, setUpdateMember] = useState(memberData)
  const handleUpdateMember = () => {
    dispatch(
      updateMemberAction({id: memberData.id, updateMember: updateMember}),
    )
    onClose()
  }
  return (
    <Modal visible={visible} animationType="slide">
      {/* User can update the employee information with these
      form where data remain persisted when the user clicks on update */}

      <View style={styles.modalContainer}>
        <TextInput
          defaultValue={memberData?.name}
          value={updateMember?.name}
          onChangeText={text => setUpdateMember({...updateMember, name: text})}
          style={styles.textinput}
          placeholderTextColor="black"
        />

        <Picker
          selectedValue={updateMember?.position}
          onValueChange={(itemValue, itemIndex) =>
            setUpdateMember({...updateMember, position: itemValue})
          }
          style={styles.picker}>
          <Picker.Item label="Choose Department" />
          <Picker.Item label="HR" value="HR" />
          <Picker.Item
            label="Head of engineering"
            value="Head_of_Enginnering"
          />
          <Picker.Item label="Head of design" value="Head_of_design" />
        </Picker>

        <TextInput
          defaultValue="Phone"
          value={memberData?.phone}
          onChangeText={text => setUpdateMember({...updateMember, phone: text})}
          style={styles.textinput}
          placeholderTextColor="black"
        />
        <TextInput
          defaultValue="Email"
          value={memberData?.email}
          onChangeText={text => setUpdateMember({...updateMember, email: text})}
          style={styles.textinput}
          placeholderTextColor="black"
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={handleUpdateMember}
            style={styles.btnElement}>
            <Text style={styles.buttonText}>Update team Member</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.btnElement}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  picker: {
    backgroundColor: '#D3D3D3',
    width: '70%',
    marginTop: 10,
    borderWidth: 1,
  },
  textinput: {
    width: '70%',
    textAlign: 'center',
    borderWidth: 1,
    marginTop: 10,
    color: 'black',
  },
  btnElement: {
    backgroundColor: 'blue',
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
})
