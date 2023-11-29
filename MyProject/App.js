import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './components/Redux/store';
import { AddTeamMember } from './components/TeamMembers/AddTeamMember';
import { ViewEmployee } from './components/CompanyHierarchy/ViewEmployee';
import { HomePage } from './components/CompanyHierarchy/HomePage';
import { ManageTeam } from './components/CompanyHierarchy/ManageTeam';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="ManageTeam" component={ManageTeam} />
          <Stack.Screen name="MemberList" component={ViewEmployee} />
          <Stack.Screen name="AddMember" component={AddTeamMember} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
