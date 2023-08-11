import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import STRING from '../../../constants';

export default function RadioButton({
  buttons,
  onChange,
  value,
  containerStyle,
}) {
  return (
    <View style={containerStyle}>
      {buttons.map(button => {
        return (
          <TouchableOpacity
            key={button.id}
            style={style.container}
            onPress={() => onChange(button.value)}>
            <View style={style.radioButton}>
              {value === button.value ? (
                <View style={style.radioButtonInnerCircle} />
              ) : null}
            </View>
            <Text style={style.label}>{button.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: STRING.colors.white,
    borderWidth: 2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInnerCircle: {
    backgroundColor: STRING.colors.white,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  label: {
    fontSize: 18,
    color: STRING.colors.white,
    marginLeft: 8,
  },
});
