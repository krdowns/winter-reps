
// SECTION A - Q & A //

// How do we assign a value to a variable?
var variable = 1;
// How do we change the value of a variable?
var variable = 2;
// How do we assign an existing variable to a new variable?
var newVariable = variable;
// Remind me, what are declare, assign, and define?

'Declare is creating a variable with a name'

'Assign is to give that created variable a value'

'Define is to create a variable and assign a value to it.'

// What is pseudocoding and why should you do it?
'It is using normal language to solve a problem before you use coding syntax to write the solution'
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
'I would say that at least 75% of the time should be spent planning so when you are coding you are just typing out your solution rather than solving it as you type.'

// SECTION B - STRINGS //

// Create a variable called firstVariable.
var firstVariable;

// Assign it the value of the string "Hello World"
firstVariable = "Hello World";

// Change the value of this variable to some number.
firstVariable = 2;

// Store the value of firstVariable in a new variable called secondVariable
var secondVariable = firstVariable;

// Change the value of secondVariable to any string.
secondVariable = "New string"

// What is the value of firstVariable?
2

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
var yourName = "Kenny Downs"

console.log("Hello my name is " + yourName);
console.log(`Hello my name is ${yourName}`);

// SECTION C - BOOLEANS //

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true !== false);
  console.log(false == false == false == false == false == false == true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b == c);
  console.log(a * a == d);
  console.log(48 == '48');


// SECTION D - THE FARM //

// Declare a variable animal. Set it to be either "cow" or something else.
var animal = "cow";

// Write code that will print out "mooooo" if the it is equal to cow.
if (animal == "cow") {
    console.log('mooooo');
} else {
    console.log(`Hey! You're not a cow.`);
}

// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

// Commit.
