import React, {useState, useEffect} from 'react';
import Header from '../comp/header';
import Scaffold from '../comp/scaffold';
import {
  Alert,
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import RecordItem from '../comp/record-item';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import STRING from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Progress from '../comp/progress';
import EmptyComponent from '../comp/nothing-found';

const ScreenHeader = () => <Header title={'Past\nExpenses'} />;

export default function Home() {
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [records, setRecords] = useState([]);

  async function fetchItems() {
    try {
      let value = await AsyncStorage.getItem('user');
      if (value != null) {
        value = JSON.parse(value);
        setRecords([...value]);
      }
      setLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);
  function onLongPress() {
    if (selectionMode !== true) {
      setSelectionMode(true);
    }
  }

  function dismissSelectMode() {
    setSelectionMode(false);
    setSelectedItems([]);
  }
  function deleteItems() {
    if (selectedItems.length > 0) {
      Alert.alert('Niska Asks', 'Are you sure to delete selected items?', [
        {
          text: 'Yes, Delete',
          onPress: () => alert('Deleted'),
        },
        {
          text: "No, Don't Delete",
        },
      ]);
    }
  }

  function itemToRender({item}) {
    return (
      <RecordItem
        {...item}
        onLongPress={onLongPress}
        selectionMode={selectionMode}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    );
  }
  return (
    <Scaffold flatListCompatible={true}>
      {selectionMode ? (
        <View style={style.options}>
          <TouchableOpacity style={style.optionButton} onPress={deleteItems}>
            <MaterialIcons
              name="delete"
              style={[style.optionIcon, style.red]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.optionButton}
            onPress={dismissSelectMode}>
            <MaterialIcons
              name="clear"
              style={[style.optionIcon, style.white]}
            />
          </TouchableOpacity>
        </View>
      ) : null}

      {loaded ? (
        <FlatList
          ListHeaderComponent={ScreenHeader}
          renderItem={itemToRender}
          keyExtractor={item => item.id}
          initialNumToRender={10}
          data={records}
          ListEmptyComponent={EmptyComponent}
          style={style.page}
          contentContainerStyle={records.length === 0 ? style.page : null}
        />
      ) : (
        <>
          <ScreenHeader />
          <Progress />
        </>
      )}
    </Scaffold>
  );
}

const style = StyleSheet.create({
  options: {
    backgroundColor: STRING.colors.primary,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
  },
  optionIcon: {
    fontSize: 30,
  },
  optionButton: {
    margin: 10,
  },
  white: {
    color: STRING.colors.white,
  },
  red: {
    color: STRING.colors.red,
  },
  page: {
    flex: 1,
  },
});
