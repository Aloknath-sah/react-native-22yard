import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'

export const ManageTeam = () => {
  const companyData = useSelector(state => state.company)
  const navigation = useNavigation()

  const handleTeamData = position => {
    console.warn('pos', position);
    if (position === 'Head of Design') {
      navigation.navigate('Head_of_Design')
    } else if (position === 'Head of Engineering') {
      navigation.navigate('Head_of_Engineering')
    } else if (position === 'Head of Staff/HR') {
      navigation.navigate('HR')
    }
  };
  return (
    <View>
      <View>
        {companyData?.map(item => (
          <View style={styles.card} key={item.id}>
            <Text style={styles.title}>{`Name: ${item.name}`} </Text>
            <Text style={styles.subtitle}>{`Position: ${item.position}`} </Text>
          </View>
        ))}
      </View>

      <View style={styles.threecards}>
        {companyData[0]?.company_teamMembers?.slice(0, 2)?.map(item => (
          <View style={styles.teamCard}>
            <Text style={styles.title}>{`Name: ${item.name}`} </Text>
            <Text style={styles.subtitle}>{`Position: ${item.position}`} </Text>
            <Button
              title="see the teams"
              onPress={() => handleTeamData(item.position)}
            />
          </View>
        ))}
      </View>
      <View style={styles.lastcards}>
        {companyData[0]?.company_teamMembers?.slice(2)?.map(item => (
          <View style={styles.teamlastCard}>
            <Text style={styles.title}>{`Name: ${item.name}`} </Text>
            <Text style={styles.subtitle}>{`Position: ${item.position}`} </Text>
            <Button
              title="see the teams"
              onPress={() => handleTeamData(item.position)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 15,
    alignItems: 'center',
    marginLeft: '8%',
    marginRight: '8%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  threecards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '5%',
    marginRight: '5%'
  },
  teamCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 15,
    width: 60,
  },
  lastcards: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  teamlastCard: {
    flexBasis: '50%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 15,
    alignItems: 'center',
    marginLeft: '25%'
   
  },
})
