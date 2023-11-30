import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

export const EngineeringTeams = () => {
  const companyData = useSelector((state) => state.company);

  const hoeTeamMembers = companyData[0]?.company_teamMembers
  ?.filter((item) => item.position === 'Head of Engineering')
  ?.map((item) => item.teamMembers_dept)
  ?.flat();

  console.warn("Head of Engineering");
  return (
    <View>
      
        <View>
        {
            hoeTeamMembers?.map((item) => (
              <View key={item.id}>
                <Text>{`Team Name: ${item?.name}`} </Text>
                <Text>{`Team Leader Name: ${item?.teamLeader?.name}`} </Text>
              </View>
            ))
          }
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  
});
