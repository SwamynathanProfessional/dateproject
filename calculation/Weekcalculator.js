import Category from '../Models/category';
import {CATEGORIES} from '../data/dummy-data';
const Weekcalculator = (date, month, year) => {
  var daysinmonth;
  var prevdaysinmonth;

  var calender = [
    {number: 30, month: [4, 6, 9, 10]},
    {number: 31, month: [1, 3, 5, 7, 8, 11, 12]},
    {number: 28, month: 2},
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

  calender.map(item => {
    var months = item.month;
    for (let i in months) {
      let x = months[i];
      if (x === month) {
        daysinmonth = item.number;
        break;
      } else if (x === month - 1) {
        prevdaysinmonth = item.number;
      }
    }
  });

  let day = parseInt(daycalculator(date, month, year));
  //console.log(day);
  //console.log(weekdaysname[day].weekdayname);
  if (date === 1) {
    Allweekcalculator(prevdaysinmonth - (day - 1), prevdaysinmonth, day);
  } else {
    Allweekcalculator(date - day, daysinmonth, day);
  }

  function Allweekcalculator(date, daysinmonth, day) {
    var loopday = day;
    for (let j = 0; j <= 6; j++) {
      if (date <= daysinmonth && day <= 6) {
        CATEGORIES.push(
          new Category(
            date,
            weekdaysname[j].weekdayname,
            sendcolour(j, loopday),
            //  j <= loopday ? (j === loopday ? '#7fff00' : '#ff4500') : '#7ff',
          ),
        );
        date = date + 1;
        day = day + 1;
      } else if (day > 6) {
        day = 0;
        CATEGORIES.push(
          new Category(
            date,
            weekdaysname[j].weekdayname,
            sendcolour(j, loopday),
            // j <= loopday ? (j === loopday ? '#7fff00' : '#ff4500') : '#7ff',
          ),
        );
        date = date + 1;
        day = day + 1;
      } else {
        date = 1;
        CATEGORIES.push(
          new Category(
            date,
            weekdaysname[j].weekdayname,
            sendcolour(j, loopday),
            //  j <= loopday ? (j === loopday ? '#7fff00' : '#ff4500') : '#7ff',
          ),
        );
        date = date + 1;
        day = day + 1;
      }
    }
  }

  function sendcolour(j, loopday) {
    if (j === loopday) {
      return '#7fff00';
    } else if (j === loopday + 1) {
      return '#ff4500';
    } else {
      return '#7ff';
    }
  }

  function daycalculator(date, month, year) {
    let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    year -= month < 3 ? 1 : 0;
    return Math.round(
      (year + year / 4 - year / 100 + year / 400 + t[month - 1] + date) % 7,
    );
  }
};

export default Weekcalculator;
