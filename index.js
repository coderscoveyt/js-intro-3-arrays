const array = ["Hello", true, null, 25]; // initialization of the array

console.log(array[1]); // getting element by index

console.log(array.length); // getting length

console.log(array.at(-1)); // negative indices

const newArr = array.concat([1, 2, 3, 4, 5]); // concatenation
console.log(newArr);

console.log(array.join("")); // condense to a single value

const x = [1, 2, 3, 4, 5];

const lastOfX = x.pop(); // capture the last element
x.push("Added w/ push"); // add the element to the end (appending)

x.shift(); // remove the first element
x.unshift("Added w/ unshift"); // add the first element (prepending)

console.log("ARRX", x);

const y = [1, 2, 3, 4, 5, [10, 20, 30, 40, 50]]; // flattening
const z = y.flat();
console.log("ARR Z - FLATTENED", z);

console.log(
  array.includes("Hello"), // search by value
  array.includes("world") // instead of index
);

const hof = [1, 2, 3, 4, 5, 15, 50, 100];

// FOREACH: void (no return value)
hof.forEach((element, index) => {
  console.log(`FROM FOREACH: ${element}, ${index}`);
});

const hofMap = hof.map((element) => element + 1); // map
// console.log("HOFMAP", hofMap);

const isOver10 = element => element > 10;

const hofFind = hof.find(isOver10); // find
const hofFilter = hof.filter(isOver10); // filter

console.log("HOF - FIND", hofFind);
console.log("HOF - FILTER", hofFilter);

const hofSome = hof.some(isOver10); // some
const hofEvery = hof.every(isOver10); // every

console.log("HOF - SOME", hofSome);
console.log("HOF - EVERY", hofEvery);

const hofReduce = hof.reduce((a, v) => a > v ? a : v); // reduce
console.log("HOF - REDUCE", hofReduce);