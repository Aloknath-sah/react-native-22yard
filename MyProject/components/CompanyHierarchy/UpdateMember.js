import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Modal, Button } from 'react-native'
import { updateMemberAction } from '../Redux/action';
import {Picker} from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';

export const UpdateMember = ({visible, onClose, memberData}) => {
    const dispatch = useDispatch();
    const [updateMember, setUpdateMember] = useState(memberData);
    console.warn("update", updateMember);
    const handleUpdateMember = () => {
        console.warn("memberid", memberData.id);
        console.warn("updatedmember", updateMember);
        dispatch(updateMemberAction({id: memberData.id, updateMember: updateMember}));
        onClose();
      };
  return (
    <Modal visible={visible} animationType="slide">
    <View style={styles.modalContainer}>
      <TextInput
        defaultValue={memberData?.name}
        value={updateMember?.name}
        onChangeText={(text) => setUpdateMember({ ...updateMember, name: text })}
        style={styles.textinput}
      />
      <Picker
        selectedValue={updateMember?.position}
        onValueChange={(itemValue, itemIndex) => setUpdateMember({ ...updateMember, position: itemValue })}
        style={styles.picker}
      >
        <Picker.Item label="Choose Department" />
        <Picker.Item label="HR" value="HR" />
        <Picker.Item label="Head of engineering" value="Head_of_Enginnering" />
        <Picker.Item label="Head of design" value="Head_of_design" />
      </Picker>
      <TextInput
        defaultValue="Phone"
        value={memberData?.phone}
        onChangeText={(text) => setUpdateMember({ ...updateMember, phone: text })}
        style={styles.textinput}
      />
      <TextInput
        defaultValue="Email"
        value={memberData?.email}
        onChangeText={(text) => setUpdateMember({ ...updateMember, email: text })}
        style={styles.textinput}
      />
      <Button title="Update Team Member" onPress={handleUpdateMember} />
      <Button title="Cancel" onPress={onClose} />
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },
    picker: {
        height: 40,
        width: '100%',
        marginTop: 10,
      },
    textinput: {
        width: '100%',
        textAlign: 'center'
    }
  });
