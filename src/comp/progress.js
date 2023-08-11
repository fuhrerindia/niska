import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import STRING from '../../constants';

export default function Progress() {
  return (
    <View style={style.view}>
      <ActivityIndicator size={'large'} color={STRING.colors.amber} />
    </View>
  );
}
const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
