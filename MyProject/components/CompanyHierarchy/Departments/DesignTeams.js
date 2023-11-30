import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

export const DesignTeams = () => {
  const companyData = useSelector((state) => state.company);

  const hodTeamMembers = companyData[0]?.company_teamMembers
  ?.filter((item) => item.position === 'Head of Design')
  ?.map((item) => item.teamMembers_dept)
  ?.flat();

  console.warn("Head of Design");
  return (
    <View>
      
        <View>
        {
            hodTeamMembers?.map((item) => (
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
