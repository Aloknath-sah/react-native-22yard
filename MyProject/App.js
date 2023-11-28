import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './components/Redux/store';
import { AddTeamMember } from './components/TeamMembers/AddTeamMember';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MemberList">
          <Stack.Screen name="AddMember" component={AddTeamMember} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;