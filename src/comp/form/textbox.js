import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import STRING from '../../../constants';

export default function TextBox(props) {
  return (
    <View style={style.textbox}>
      <TextInput
        {...props}
        placeholderTextColor={STRING.colors.black}
        style={[
          style.textboxInput,
          props.multiline === true ? style.multiline : style.singleLine,
        ]}
      />
    </View>
  );
}

const style = StyleSheet.create({
  textbox: {
    backgroundColor: STRING.colors.white,
    width: 0.8 * STRING.size.width,
    borderRadius: 10,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 5,
    flexDirection: 'row',
  },
  textboxInput: {
    width: '100%',
    paddingLeft: 15,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  singleLine: {
    height: 36,
    textAlignVertical: 'center',
  },
});
