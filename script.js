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