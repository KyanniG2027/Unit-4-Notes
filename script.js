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

/*FUNCTIONS:
 reasuable sets of code statements 
 that perfrom a specidic task or process 
 */ 

 // console.log is a FUNCTION that we've used
 //TASK: display dfata in the console
 console.log("I just used a function!");

 // DECLARE (create) your own function 
 function skincare() {
    //STATEMNTS (actions) to execute for this routine 
    console.log("1.Cleasne");
    console.log("2. Apply toner");
    console.log("3 mosturize");

 }

 // CALL da FUNCTION to use it!
  skincare();
  skincare(""); // can fun the function app 


/// *** Selection (CONDITIONALS) ***
/// A conditional expression is like a QUESTION
/// that has a boolean (true/false) ANSWER 

console.log("Conditionals:");
console.log(4>5); // 4 greater than 5 evaluates to FALSE
console.log("Is 10 less than 2?")
console.log(10<2);
console.log(2==2);
console.log(3!=2);
console.log(3!=3);

// Strings can also be compared, by dictornary order 
///Ech letter/character has a numerical value (A is 1, B is 2..)
console.log("Kyanni" > "Ayesha"); //true
console.log("Z" < "A"); // false 
console.log("Katerina" == "Katherine" );

//Can use comparison operators btwn variables and values 
let myNickname ="Ky";
console.log(myNickname=="Ky" );