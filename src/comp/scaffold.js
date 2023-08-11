import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import STRING from '../../constants';
import Header from './header';

export default function Scaffold({children, flatListCompatible, title}) {
  return flatListCompatible === true ? (
    <View style={style.base}>
      {title ? <Header title={title} /> : null}
      {children}
    </View>
  ) : (
    <ScrollView style={style.base}>
      {title ? <Header title={title} /> : null}
      {children}
    </ScrollView>
  );
}
const style = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: STRING.colors.screen,
  },
});
