/* This is a MULTI-LINE comment 
The code below is an example STATEMENT
(instruction/command
console.log is a FUNCTION that displays info in the console (output) area
STATEMENTS end with a SEMICOLON(;)
*/

console.log("HEWO");

//This is a single line comment

//DECLARE a new VARIABLE
let pokemon;

///ASSIGN a Value to the variable
// its like putting an item in the box
pokemon="Snorlax"

//DELCARE + ASSIGN in one statement
let luckyNumber =13;

//"PASS IN" a variable to a Function 
console.log(luckyNumber)

//CHANGE the value of an existing variable 
let raining=false; 
console.log(raining);
raining = true;
console.log(raining); 

//COPy data from one variable into another
let breakfast="starbucks";
let lunch;
lunch=breakfast;
//Both variables hold the same value 
console.log(breakfast);
console.log(lunch);
//Above statements log the VALUES stored in VARIABLES named breakgfast and lunch 
//Below statements log the literal string "lunch"
console.log("lunch");

//MATH OPERATIONS
let score = 0
score=score + 5;
console.log(score);
score = score -10;
console.log(score);
score = score * (-3);
console.log(score);
score = score / 5;
console.log(score);

// Can combine operators, evaluation followes PEMDAS

score = (score * 3 /7 -4 + 6  + (-6)) ** 2;
console.log(score);

// STRING CONCATENATION (merging with the PLUS SIGN)
// Strings are indicated with "Quotes"
let greeting = "Hello " + "Friend";
console.log(greeting);

//Can combine String Literales with string VARIABLES
let username ="nyc_cats_xoxo";
console.log("Welcome"   + username + "🐍");

//Numbers get converted to Strings if combines 
console.log(4 + 5); //9 (did addition)
console.log("4" + 5);// 45 (conceatenate, not math)
console.log(4 + "5");

//SHORTCUT OPERATERS (incremant/Decrement)
let counter=0;
counter= counter + 1 // LONG WAY 
counter++; //SHORTCOUNT 
console.log(counter);
console.log("count is: " + counter);
counter--;
console.log ("count is" + counter);