import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import STRING from '../../constants';

export default function Scaffold({children, flatListCompatible}) {
  return flatListCompatible === true ? (
    <View style={style.base}>{children}</View>
  ) : (
    <ScrollView style={style.base}>{children}</ScrollView>
  );
}
const style = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: STRING.colors.screen,
  },
});
