import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Splash, Pencarian, MateriSaya, Wishlist, Profile} from '../pages';
import {TombolNav} from '../components/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <TombolNav {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pencarian" component={Pencarian} />
      <Tab.Screen
        name="MateriSaya"
        component={MateriSaya}
        options={{title: 'Materi Saya'}}
      />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
