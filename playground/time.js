var moment = require('moment');
//Jan 1st 1970 00:00:00 am
//1,000ms = 1 sec
//10,000ms = 10 sec
//Jan 1st 1970 00:00:10 am
//Dec 31 1969 23:59:59 pm

// var date = new Date;
// console.log("the month is: " + date.getMonth());

// var date = moment();
// console.log(date.format('lll'));


//EXERCISE
//get: 10:35am
//padded, not: 6:01 / 06:1


var date = moment()
console.log(date.format('h:mm a'))


var createAt = 1234000;
var date = moment(createAt)


// var dDate().getTime()
var someTimestamd = moment().valueOf();
console.log(someTimestamd)