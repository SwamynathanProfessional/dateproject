import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CalenderGridTitle = props => {
  return (
    <View style={styles.gridItem}>
      {
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.title}>{props.startingdate}</Text>
          <Text style={styles.title}>{props.dayname}</Text>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  container: {
    flex: 1,
    borderWidth: 2,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 22,
    textAlign: 'left',
  },
});

export default CalenderGridTitle;
