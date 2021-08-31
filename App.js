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
  let curr = new Date();
  let week = [];
  var first;
  for (let i = 0; i <= 6; i++) {
    first = curr.getDate() - curr.getDay() + i;

    let day = new Date(curr.setDate(first)).toISOString().slice(8, 10);
    week.push(day);
  }
  // var date = new Date().getDate();
  // var month = new Date().getMonth() + 1;
  // var year = new Date().getFullYear();

  Weekcalculator(week, curr.getDay);

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
