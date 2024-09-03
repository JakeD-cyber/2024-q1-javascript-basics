//@ts-check

// add can be called before it is defined because it is hoisted
// to the global scope 
add(1, 2);

Let firstName= "John";

// add default perameter values 
Let sayHi = function (first name = "Captain No Name", age = 100000) {
     Let greeting = `Hello! my name is ${firstname} and I am ${age} years old.`;
     // "Hello! my name is " + firstname + :" and I am " + age + " years old.";
     console.log(greeting);
};


debugger;

// call with default params
sayHi();
// call with default age
sayHi("Jake");
sayHi("Robert", 53);
sayHi(firstName, 19);

sayHi("Robert",53);
sayHi(firstName, 19);

// console.log(firstName);

// this function is hoisted to the global scope
function add(a, b) {
    Let answer = a + b;
    return answer;
}

Let additionAnswer = add("2", 1);
add(5000, 9873498739873);

console.log(addittionAnswer, add(5000, 9873498739873));

Let runMyStuff = (x, y, f => {
    Let answer = f(x, y);
    return answer;
};

function wearBarneyShirt(person) {
    person.IsWearingBarneyShirt = true;
    person.IsTotallyAwesome = true;
}

console.log(person);
wearBarneyShirt(person);
console.log(person);