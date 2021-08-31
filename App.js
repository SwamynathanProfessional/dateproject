import * as React from 'react';
import Weekcalculator from './calculation/Weekcalculator';
import {FlatList} from 'react-native';
import CalenderGridTitle from './components/CalenderGridTitle';
import {CATEGORIES} from './data/dummy-data';
function App() {
  const renderGridItem = itemData => {
    return (
      <CalenderGridTitle
        startingdate={itemData.item.startingdate}
        dayname={itemData.item.dayname}
        color={itemData.item.color}
      />
    );
  };

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  Weekcalculator(date, month, year);

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      horizontal
      numColumns={1}
      renderItem={renderGridItem}
    />
  );
}

export default App;
