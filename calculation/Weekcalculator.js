import Category from '../Models/category';
import {CATEGORIES} from '../data/dummy-data';
const Weekcalculator = (week, dayoftheweek) => {
  var weekdaysname = [
    {weekdayname: 'Sunday', number: 0},
    {weekdayname: 'Monday', number: 1},
    {weekdayname: 'Tuesday', number: 2},
    {weekdayname: 'Wednesday', number: 3},
    {weekdayname: 'Thrusday', number: 4},
    {weekdayname: 'Friday', number: 5},
    {weekdayname: 'Saturday', number: 6},
  ];

  week.map((item, index) => {
    CATEGORIES.push(new Category(item));
  });

  function sendcolour(j, loopday) {
    if (j === loopday) {
      return '#7fff00';
    } else if (j === loopday + 1) {
      return '#ff4500';
    } else {
      return '#7ff';
    }
  }
};

export default Weekcalculator;
