import React from 'react';
import Scaffold from '../comp/scaffold';
import TextBox from '../comp/form/textbox';

export default function New() {
  return (
    <Scaffold title={'New\nTransaction'}>
      <TextBox placeholder="HIHI ji" leftIconName="clear" multiline={false} />
    </Scaffold>
  );
}
