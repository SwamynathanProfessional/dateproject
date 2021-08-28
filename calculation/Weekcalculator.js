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

  let day = daycalculator(date, month, year);
  //console.log(day);
  //console.log(weekdaysname[day].weekdayname);
  Allweekcalculator(parseInt(date), daysinmonth, day);

  function Allweekcalculator(date, daysinmonth, day) {
    for (let j = 0; j <= 6; j++) {
      if (date <= daysinmonth && day <= 6) {
        CATEGORIES.push(
          new Category(date, weekdaysname[day].weekdayname, '#f5428d'),
        );
        date = date + 1;
        day = day + 1;
      } else if (day > 6) {
        day = 0;
        CATEGORIES.push(
          new Category(date, weekdaysname[day].weekdayname, '#f5428d'),
        );
        date = date + 1;
        day = day + 1;
      } else {
        date = 1;
        CATEGORIES.push(
          new Category(date, weekdaysname[day].weekdayname, '#f5428d'),
        );
        date = date + 1;
        day = day + 1;
      }
    }
  }

  function daycalculator(date, month, year) {
    let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    year -= month < 3 ? 1 : 0;
    return (
      (year + year / 4 - year / 100 + year / 400 + t[month - 1] + date) % 7
    );
  }
};

export default Weekcalculator;
