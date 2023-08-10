import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import STRING from './constants';
const ExceptionAddButton = {
  view: {
    width: 55,
    height: 55,
    bottom: 25,
    borderRadius: 28,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    color: '#ffffff',
  },
  colors: [STRING.colors.primary, STRING.colors.lightPrimary],
};

const BOTTOM_TAB_ICONS = {
  home: props => <MaterialIcons name="home" {...props} />,
  plan: props => <MaterialIcons name="calculate" {...props} />,
  new: ({onPress}) => (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={ExceptionAddButton.colors}
        style={ExceptionAddButton.view}>
        <MaterialIcons name="add" style={ExceptionAddButton.icon} />
      </LinearGradient>
    </Pressable>
  ),
  screenOptions: {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: STRING.colors.primary,
      borderTopWidth: 0,
    },
    tabBarIconStyle: {
      fontSize: 50,
    },
    tabBarActiveTintColor: STRING.colors.amber,
    tabBarInactiveTintColor: STRING.colors.white,
  },
};

export default BOTTOM_TAB_ICONS;
