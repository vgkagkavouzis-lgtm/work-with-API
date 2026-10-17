//1.
const numbers = [1, 2, 3, 4, 5, 6]; // "4-8-12"

const result = numbers.filter((n) => n % 2 == 0).map(n => n * 2).join('-');
// console.log(result);

//2.
const users = [
  { name: 'John', active: true },
  { name: 'Maria', active: false },
  { name: 'Chris', active: true },
  { name: 'Anna', active: false },
];                                   // "John, Chris"

const usersKeep = users.filter(({active}) => active ).map(({name}) => name).join(', ');
// console.log(usersKeep)


//3.
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear'];
const allowedFruits = ['apple', 'orange', 'pear'];
// create: "apple | orange | pear"

const result3 = fruits.filter(fruit => allowedFruits.includes(fruit)).join(' | ');
// console.log(result3);

//4.
const parts = [
  { type: 'hour', value: '8' },
  { type: 'literal', value: ':' },
  { type: 'minute', value: '45' },
  { type: 'dayPeriod', value: 'PM' },
];                                    //"8:45"

const time = parts.filter(({type}) => ['hour', 'literal', 'minute'].includes(type)).map(({value})=> value).join('');
console.log(time);


//5.
const parts1 = [
  { type: 'hour', value: '10' },
  { type: 'literal', value: ':' },
  { type: 'minute', value: '30' },
  { type: 'dayPeriod', value: 'AM' },
];

// create:
// time === '10:30'
// period === 'AM'

const time1 = parts1.filter(({type})=> ['hour', 'literal', 'minute'].includes(type)).map(({value}) => value).join('');
const period = parts1.filter(({type}) => ['dayPeriod'].includes(type)).map(({value})=> value);
console.log(`${time} ${period}`);

