import {parse} from '@babel/core';
import * as React from 'react';
import {View, Text} from 'react-native';
import Category from '../Models/category';
import {CATEGORIES} from '../data/dummy-data';
const Weekcalculator = (date, month, year) => {
  var daysinmonth = '';
  var calender = [
    {name: 30, month: ['4', '6', '9']},
    {name: 31, month: ['1', '3', '5', '7', '8', '10', '11', '12']},
    {name: 29, month: '2'},
    {name: 28, month: '2'},
  ];

  var weekdaysname = [
    {weekdayname: 'Sunday', number: 0},
    {weekdayname: 'Monday', number: 1},
    {weekdayname: 'Tuesday', number: 2},
    {weekdayname: 'Wednesday', number: 3},
    {weekdayname: 'Thrusday', number: 4},
    {weekdayname: 'Friday', number: 5},
    {weekdayname: 'Saturday', number: 6},
  ];

  calender.map((item, index) => {
    var months = item.month;
    for (let i in months) {
      let x = months[i];
      if (x === month) {
        daysinmonth = item.name;
        break;
      }
    }
  });

  let day = daycalculator(year.substr(2, 3), month, date);
  //console.log(day);
  //console.log(weekdaysname[day].weekdayname);
  Allweekcalculator(date - day, daysinmonth, day);

  function Allweekcalculator(date, daysinmonth, day) {
    for (let j = 0; j <= 6; j++) {
      if (date < daysinmonth) {
        if (j === day) {
          CATEGORIES.push(
            new Category(date, weekdaysname[j].weekdayname, '#f54'),
          );
          date = date + 1;
        } else {
          CATEGORIES.push(
            new Category(date, weekdaysname[j].weekdayname, '#f5428d'),
          );
          date = date + 1;
        }
      } else {
        date = 1;
        CATEGORIES.push(
          new Category(date, weekdaysname[j].weekdayname, '#f5428d'),
        );
      }
    }
  }

  function daycalculator(startingdatesecond, month, date) {
    return (
      (Math.floor(
        (parseInt(startingdatesecond) +
          Math.floor(parseInt(startingdatesecond) / 4)) %
          7,
      ) +
        parseInt(month) +
        parseInt(date)) %
      7
    );
  }
};

export default Weekcalculator;
