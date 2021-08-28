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

  Weekcalculator(String(date), String(month), String(year));
  //Weekcalculator(String(18), String(8), String(2021));

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
