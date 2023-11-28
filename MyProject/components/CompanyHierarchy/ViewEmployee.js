import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { removeMember, updateMember } from '../Redux/action';
import { UpdateMember } from './UpdateMember';
import { useState, useEffect } from 'react';

export const ViewEmployee = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const employeeData = useSelector((state) => state.teamMembers);

    useEffect(() => {
        setSelectedMember(null);
        console.warn("employeeData", employeeData);
      }, [employeeData])

    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleAddNewMember = () => {
        navigation.navigate('AddMember');
    }

    const handleRemoveMember = (itemId) => {
        dispatch(removeMember(itemId));
    }

    const handleUpdateMember = (item) => {
        setSelectedMember(item);
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
        setSelectedMember(null);
      };

     
      

  return (
    <View style={styles.container}>
        <View>
            <Button title="Add new Member" onPress={handleAddNewMember} />
        </View>
        <View style={styles.listItem}>
            <Text style={styles.itemText}>Position Name</Text>
            <Text style={styles.itemText}>Employee Name</Text>
        </View>
        {
            employeeData.map((item) => (
                <View style={styles.listItem} key={item.id}>
                    <Text style={styles.itemText}> {item.position} </Text>
                    <Text style={styles.itemText}> {item.name} </Text>
                    <Button title="Update Member" onPress={() => handleUpdateMember(item)} />
                    <Button title="Remove Member" onPress={() => handleRemoveMember(item.id)} />
                    <UpdateMember
                        visible={isModalVisible}
                        onClose={closeModal}
                        memberData={selectedMember}
                    />
                </View>
            ))
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
     // flex: 1,
     //flexDirection: 'row',
    },
    listItem: {
        flexDirection: 'row',
      height: 100, // Set the height of each item as needed
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd', // Add a border for separation
    },
    itemText: {
      fontSize: 18,
      flex: 1
    },
  });