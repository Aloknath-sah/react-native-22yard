import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const ViewEmployee = () => {
    const employeeData = useSelector((state) => state.teamMembers);
    console.warn(employeeData);
  return (
    <View style={styles.container}>
        <View style={styles.listItem}>
            <Text style={styles.itemText}>Position Name</Text>
            <Text style={styles.itemText}>Employee Name</Text>
        </View>
        {
            employeeData.map((item) => (
                <View style={styles.listItem}>
                    <Text style={styles.itemText}> {item.position} </Text>
                    <Text style={styles.itemText}> {item.name} </Text>
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