import React from 'react';
import Header from '../comp/header';
import Scaffold from '../comp/scaffold';
import {FlatList} from 'react-native';

const ScreenHeader = () => <Header title={'Past\nExpenses'} />;

export default function Home() {
  return (
    <Scaffold flatListCompatible={true}>
      <FlatList ListHeaderComponent={ScreenHeader} />
    </Scaffold>
  );
}
