import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {removeMember, updateMember} from '../Redux/action'
import {UpdateMember} from './UpdateMember'
import {useState, useEffect} from 'react'

export const ViewEmployee = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  //const employeeData = useSelector((state) => state.teamMembers);
  const employeeData = useSelector(state => state.teamMembers)

  useEffect(() => {
    setSelectedMember(null)
  }, [employeeData])

  const [selectedMember, setSelectedMember] = useState(null)
  const [isModalVisible, setModalVisible] = useState(false)
  const [searchText, setSearchText] = useState('')

  const handleAddNewMember = () => {
    navigation.navigate('AddMember')
  }

  const handleRemoveMember = itemId => {
    dispatch(removeMember(itemId))
  }

  const handleUpdateMember = item => {
    setSelectedMember(item)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedMember(null)
  }

  // Function to filter employees based on search criteria
  const filteredEmployees = employeeData.filter(employee => {
    const searchTerm = searchText.toLowerCase()
    return (
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.phone.includes(searchTerm) ||
      employee.email.toLowerCase().includes(searchTerm)
    )
  })

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search by Name, Phone, or Email"
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <TouchableOpacity onPress={handleAddNewMember} style={styles.buttonTopAdd}>
        <Text style={styles.buttonTextTopAdd}>Add new Member</Text>
      </TouchableOpacity>
      <View style={styles.listItemTop}>
        <Text style={styles.itemText}> Position {'\n'} Name</Text>
        <Text style={styles.itemText}> Employee {'\n'}Name</Text>
        <Text style={styles.itemText}> Update/ {'\n'}Remove</Text>
      </View>
      {filteredEmployees.map(item => (
        <View style={styles.listItem} key={item.id}>
          <Text style={styles.itemText}> {item.position} </Text>
          <Text style={styles.itemText}> {item.name} </Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => handleUpdateMember(item)}
              style={styles.btnElement}>
              <Text style={styles.buttonText}>Update Member </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleRemoveMember(item.id)}
              style={styles.btnElement}>
              <Text style={styles.buttonText}>Remove Member </Text>
            </TouchableOpacity>
          </View>
          <UpdateMember
            visible={isModalVisible}
            onClose={closeModal}
            memberData={selectedMember}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //flexDirection: 'row',
  },
  buttonTextTopAdd: {
    color: 'white',
    fontSize: 17,
  },
  buttonTopAdd: {
    backgroundColor: 'blue',
    padding: 12,
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 5,
    margin: 10
  },
  button: {
    flexDirection: 'column',
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
    fontSize: 13,
  },
  listItemTop: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#D3D3D3',
    margin: 10
  },
  listItem: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    margin: 10
  },
  itemText: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
})
