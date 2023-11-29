import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { removeMember, updateMember } from '../Redux/action';
import { UpdateMember } from './UpdateMember';
import { useState, useEffect } from 'react';

export const ViewEmployee = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    //const employeeData = useSelector((state) => state.teamMembers);
    const companyData = useSelector((state) => state.company);

      let mydata = companyData[0]?.company_teamMembers?.map((item) => item?.teamMembers_dept);
    
      const extractTeamMembers = (arrayStructure) => {
        const teamMembers = [];
      
        arrayStructure.forEach((innerArray) => {
          innerArray.forEach((teamObject) => {
            if (teamObject && teamObject.teamLeader && teamObject.teamLeader.teamMembers) {
              teamMembers.push(...teamObject.teamLeader.teamMembers);
            }
          });
        });
      
        return teamMembers;
      };
      const teamMembers = extractTeamMembers(mydata);
      console.log("all", teamMembers);
      const employeeData = teamMembers;
    useEffect(() => {
        setSelectedMember(null);
      }, [employeeData])

    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');

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

    // Function to filter employees based on search criteria
    const filteredEmployees = employeeData.filter((employee) => {
        const searchTerm = searchText.toLowerCase();
        return (
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.phone.includes(searchTerm) ||
        employee.email.toLowerCase().includes(searchTerm)
        );
    });

  return (
    <View style={styles.container}>
        <View>
            <Button title="Add new Member" onPress={handleAddNewMember} />
        </View>
        <TextInput
            style={styles.searchInput}
            placeholder="Search by Name, Phone, or Email"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
        />
        <View style={styles.listItem}>
            <Text style={styles.itemText}>Position Name</Text>
            <Text style={styles.itemText}>Employee Name</Text>
        </View>
        {
            filteredEmployees.map((item) => (
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
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
      },
  });