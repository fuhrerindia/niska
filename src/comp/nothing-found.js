import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import STRING from '../../constants';

export default function EmptyComponent() {
  return (
    <View style={style.page}>
      <Ionicons name="happy-outline" style={style.icon} />
      <Text style={style.message}>No Transactions</Text>
    </View>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 50,
    color: STRING.colors.white,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: STRING.colors.white,
  },
});
