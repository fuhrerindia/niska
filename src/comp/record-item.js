import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import STRING from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';

const CHECKBOX_TINT = {
  true: STRING.colors.white,
  false: STRING.colors.white,
};
export default function RecordItem({
  id,
  amount,
  remarks,
  credit,
  onLongPress,
  selectionMode,
  selectedItems,
  setSelectedItems,
}) {
  const [showRemark, setshowRemark] = useState(false);

  let amount_ = amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: STRING.currency,
  });
  amount_ = amount_.replace('\u00A0', '').split('.')[0];

  function updateState() {
    setshowRemark(!showRemark);
  }
  function updateSelection() {
    if (selectedItems.indexOf(id) === -1) {
      setSelectedItems(currentValue => {
        let namespace = currentValue;
        namespace.push(id);
        return [...namespace];
      });
    } else {
      setSelectedItems(currentValue => {
        let namespace = currentValue;
        namespace.pop(namespace.indexOf(id));
        return [...namespace];
      });
    }
  }
  const blankRemark = remarks.replaceAll(' ', '') === '';
  remarks = blankRemark ? 'No Detail Provided' : remarks;

  return (
    <View style={style.item}>
      <Pressable onPress={updateState} onLongPress={onLongPress}>
        <View style={[style.itemHead, style.flexGap]}>
          <View style={style.itemHead}>
            {selectionMode ? (
              <CheckBox
                value={selectedItems.indexOf(id) !== -1}
                onChange={updateSelection}
                tintColors={CHECKBOX_TINT}
              />
            ) : (
              <MaterialIcons
                name="account-balance-wallet"
                style={[style.icon, credit ? style.green : style.red]}
              />
            )}

            <Text style={[style.amount, credit ? style.green : style.red]}>
              {credit ? '+' : '-'} {amount_}
            </Text>
          </View>
          <View style={style.arrowButton}>
            <MaterialIcons
              name={!showRemark ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
              style={style.arrowIcon}
            />
          </View>
        </View>
      </Pressable>
      {showRemark ? <Text style={style.remarks}>{remarks}</Text> : null}
    </View>
  );
}

const style = StyleSheet.create({
  item: {
    width: 0.92 * STRING.size.width,
    backgroundColor: STRING.colors.grey,
    alignSelf: 'center',
    padding: 5,
    borderRadius: 8,
    justifyContent: 'center',
    borderColor: STRING.colors.white,
    borderWidth: 1,
    marginBottom: 10,
  },
  icon: {
    fontSize: 50,
  },
  amount: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  green: {
    color: STRING.colors.green,
  },
  red: {
    color: STRING.colors.red,
  },
  itemHead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexGap: {
    justifyContent: 'space-between',
  },
  arrowButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: STRING.colors.silver,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  arrowIcon: {
    color: STRING.colors.white,
    fontSize: 30,
  },
  remarks: {
    color: STRING.colors.white,
    margin: 10,
    lineHeight: 25,
  },
});
