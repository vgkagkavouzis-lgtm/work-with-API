const users = [
  { id: 1, name: "Anna", age: 24, active: true },
  { id: 2, name: "John", age: 31, active: false },
  { id: 3, name: "Maria", age: 28, active: true }
];

// ===map====

// without deconstruction:
 const mapped = users.map(user => user.name === 'Maria');
//  console.log(mapped);
 
 const mapped1 = users.map(({name}) => name);
//  console.log(mapped1);

//  which means 
//  user => {
//   const { name } = user;
//   return name;
// }

const result = users.map(({name, age}) => {
    return console.log(`${name} is ${age}`);
})

// console.log(result)

// return new objects
const result2 = users.map(({id, name}) => ({id, name}));

// console.log(result2)

// When returning an object directly from an arrow function, use:
// () => ({ ... })
// not:
// () => { ... } because {} would otherwise be interpreted as the function body.

// ====filter====

const activeUsers = users.filter(({active}) => active)
// console.log(activeUsers);

const active2 = users.filter(({age, active}) => age>=25 && active);
// console.log(active2)

// ====find====

const user = users.find(({id}) => id === 2);
console.log(user);






