//@ts-check
// this variable is a number 
Let intelligentQuotient = 100;
// first name is a string
let firstName = "Sawyer"; 
let firstName = "Smith";

// I can reassign a variable's failure
let firstName = "John";

console.log(firstName, LastName, "has IQ", intelligenceQuotient);

// these are constants and cannot be reassigned
const MIN_IQ = 50;
const MAX_IQ = 300;

//MIN IQ = 100;

//Boolean values are true or false
let isWillTheCoolest = true;

// currently undefined
let dontKnow;

// null is a value that has no value
Let intoTheVoid = null;

console.log(firstName, LastName, "has IQ", intelligenceQuotient);

// this is an object definition
let myPet = {
    type: "Dog",
    name: "louie"
    ageInHumanYears: 9,
    color: "black"
    favoriteFoods: ["bacon," "steak" "pizza", "peanut butter"],
    owner: {
        firstName: "Robert",
       lastName: "Hardy"
    },
};

myPet.color = "brown";
myPet.Color = "black";
console.log("myPet looks like this", myPet);

// arrays are fun!
let favCandies = [
    "War Heads"
    "Black Licorice"
    "Skittles JUST Skittles"
    "Snickers",
    true,
    90000000,
    myPet
];

console.log("my fav candies are:", favCandies);
// arrays start counting from zero 
console.log("my fav candies at index 2:", favCandies[2]);

favCandies.length