import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
import {useSelector} from 'react-redux'

export const EngineeringTeams = () => {
  const companyData = useSelector(state => state.company)

  const hoeTeamMembers = companyData[0]?.company_teamMembers
    ?.filter(item => item.position === 'Head of Engineering')
    ?.map(item => item.teamMembers_dept)
    ?.flat();

  return (
    <View>
      <View style={styles.listItem}>
        <Text style={styles.itemText}>Team Name</Text>
        <Text style={styles.itemText}>Team Leader Name</Text>
      </View>
      <View>
        {hoeTeamMembers?.map(item => (
          <View key={item.id} style={styles.innerlistItem}>
            <Text style={styles.itemText}>{item?.name}</Text>
            <Text style={styles.itemText}>{item?.teamLeader?.name} </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', 
    paddingLeft: '5%',
    backgroundColor: '#D3D3D3',
  },
  innerlistItem: {
    flexDirection: 'row',
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', 
    paddingLeft: '5%'
  },
  itemText: {
    fontSize: 18,
    flex: 1,
    
  },
})
