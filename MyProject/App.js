import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store, persistor } from './components/Redux/store';
import { AddTeamMember } from './components/TeamMembers/AddTeamMember';
import { ViewEmployee } from './components/CompanyHierarchy/ViewEmployee';
import { HomePage } from './components/CompanyHierarchy/HomePage';
import { ManageTeam } from './components/CompanyHierarchy/ManageTeam';
import { PersistGate } from 'redux-persist/integration/react';
import {HrTeams} from './components/CompanyHierarchy/Departments/HrTeams';
import { EngineeringTeams } from './components/CompanyHierarchy/Departments/EngineeringTeams';
import { DesignTeams } from './components/CompanyHierarchy/Departments/DesignTeams';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="ManageTeam" component={ManageTeam} />
            <Stack.Screen name="MemberList" component={ViewEmployee} />
            <Stack.Screen name="AddMember" component={AddTeamMember} />
            <Stack.Screen name="HR" component={HrTeams} />
            <Stack.Screen name="Head_of_Design" component={DesignTeams} />
            <Stack.Screen
              name="Head_of_Engineering"
              component={EngineeringTeams}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
