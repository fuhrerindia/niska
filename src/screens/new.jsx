import React, {useState} from 'react';
import Scaffold from '../comp/scaffold';
import TextBox from '../comp/form/textbox';
import RadioButton from '../comp/form/radio';
import {StyleSheet} from 'react-native';
import STRING from '../../constants';

export default function New() {
  const [transactionType, setTransactionType] = useState(false);
  return (
    <Scaffold title={'New\nTransaction'}>
      <TextBox placeholder="HIHI ji" multiline={false} />
      <RadioButton
        buttons={[
          {
            id: '1',
            value: true,
            label: 'Credit',
          },
          {
            id: '2',
            value: false,
            label: 'Debit',
          },
          {
            id: '3',
            value: null,
            label: 'Amount deducted but not received by merchant',
          },
        ]}
        value={transactionType}
        onChange={setTransactionType}
        containerStyle={style.radioGroup}
      />
      <TextBox multiline={true} placeholder="Transaction Remarks" />
    </Scaffold>
  );
}

const style = StyleSheet.create({
  radioGroup: {
    width: 0.8 * STRING.size.width,
    alignSelf: 'center',
    marginTop: 20,
  },
});
