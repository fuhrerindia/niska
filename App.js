import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BOTTOM_TAB_ICONS from './tabBarConfig';
import STRING from './constants';
import {StatusBar} from 'react-native';
// SCREENS
import Home from './src/screens/home';
import New from './src/screens/new';
import Plan from './src/screens/plan';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => SplashScreen.hide(), []);
  return (
    <>
      <StatusBar
        backgroundColor={STRING.colors.primary}
        barStyle="light-content"
      />
      <NavigationContainer>
        <Tab.Navigator screenOptions={BOTTOM_TAB_ICONS.screenOptions}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: BOTTOM_TAB_ICONS.home,
            }}
          />
          <Tab.Screen
            name="New"
            component={New}
            options={{
              tabBarButton: BOTTOM_TAB_ICONS.new,
            }}
          />
          <Tab.Screen
            name="Plan"
            component={Plan}
            options={{
              tabBarIcon: BOTTOM_TAB_ICONS.plan,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
