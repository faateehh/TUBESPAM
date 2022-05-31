import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/view/screens/HomeScreen';
import DetailsSceeen from './src/view/screens/DetailsScreen';
import DescScreen from './src/view/screens/DescScreen';
import {StatusBar} from 'react-native';
import COLORS from './src/consts/colors';

const Home = () => {
  return (
    <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#004161',
          headerShown: false,
          tabBarStyle: { position: 'absolute' },
          tabBarStyle: { height: 70 , paddingBottom: 10, paddingTop: 10},
        }}
        >
        
        <Tab.Screen
          name="Beranda"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={30}/>
            ),
          }} 
        />

        <Tab.Screen
          name="Tentang"
          component={DescScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="description" size={30}/>
            ),
          }} 
        />
    </Tab.Navigator> 
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsSceeen} 
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
