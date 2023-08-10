import React from 'react';
import Header from '../comp/header';
import Scaffold from '../comp/scaffold';
import {FlatList} from 'react-native';
import RecordItem from '../comp/record-item';

const ScreenHeader = () => <Header title={'Past\nExpenses'} />;

function itemToRender({item}) {
  return <RecordItem {...item} />;
}

export default function Home() {
  return (
    <Scaffold flatListCompatible={true}>
      <FlatList
        ListHeaderComponent={ScreenHeader}
        renderItem={itemToRender}
        data={[
          {
            amount: 500,
            credit: true,
            remarks: '',
            id: '1',
          },
        ]}
      />
    </Scaffold>
  );
}
