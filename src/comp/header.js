import {Text, StyleSheet} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import STRING from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const GRADIENT_COLOR = [STRING.colors.lightPrimary, STRING.colors.primary];

export default function Header({title}) {
  return (
    <LinearGradient
      colors={GRADIENT_COLOR}
      style={style.header}
      angle={50}
      useAngle={true}>
      <MaterialIcons name="account-balance-wallet" style={style.icon} />
      <Text style={style.title}>{title}</Text>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  header: {
    width: 0.92 * STRING.size.width,
    backgroundColor: STRING.colors.primary,
    paddingVertical: 20,
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  icon: {
    fontSize: 95,
    color: STRING.colors.white,
  },
  title: {
    color: STRING.colors.white,
    fontSize: 28,
    marginLeft: 19,
  },
});
