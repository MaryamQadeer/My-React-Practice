import React from 'react';
import Home from './screens/Home';
import Map from './Components/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
