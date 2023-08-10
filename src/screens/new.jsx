import React from 'react';
import Header from '../comp/header';
import Scaffold from '../comp/scaffold';

export default function New() {
  return (
    <Scaffold>
      <Header title={'New\nTransaction'} />
    </Scaffold>
  );
}
