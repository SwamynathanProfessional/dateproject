import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CalenderGridTitle = props => {
  return (
    <View style={styles.gridItem}>
      <View style={styles.container}>
        <Text style={{...styles.title, ...{color: props.color, fontSize: 45}}}>
          {props.startingdate}
        </Text>
        <Text style={{...styles.title, ...{color: props.color, fontSize: 15}}}>
          {props.dayname}
        </Text>
      </View>
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
    backgroundColor: '#696969',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    textAlign: 'left',
  },
});

export default CalenderGridTitle;
