/////////////////////////////////////////////
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846
//////////////////////////////////////////////
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); //{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
///////////////////////////////////////////////
function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })); //`Your name is Alejandro and you like purple`
console.log(getUserData({ firstName: "Melissa" })); //`Your name is Alejandro and you like green`
console.log(getUserData({})); //Your name is undefined and you like green
///////////////////////////////////////////////
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); //Maya
console.log(second); //Marisa
console.log(third); //Chi
//////////////////////////////////////////////
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); //"Raindrops on roses"
console.log(whiskers); //"whiskers on kittens"
console.log(aFewOfMyFavoriteThings); //["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]
/////////////////////////////////////////////////
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); //[10,30,20]
/////////////////////////////////////////
//ES5 Assigning Variables to Object Properties
let obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const {
  numbers: { a },
} = obj;
const {
  numbers: { b },
} = obj;
//////////////////////////////////////////
//Array Swap
let arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

//Refacored version
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr[0]);
/////////////////////////////////////
const raceResults = ([first, second, third, ...others]) => ({
  first,
  second,
  third,
  others,
});

console.log(raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]));
