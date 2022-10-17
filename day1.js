//1.Difference between “ == “ and “ === “ operators.
/*
1. The == operator does the type conversion of the operands before comparison, whereas 
   The === operator compares the values as well as the data types of the operands.
2. Double equals named as Equality Operator, whereas Triple equals named as Identity or Strict equality Operator.
*/
var a = true;
var b = 1;
var c = true;
console.log (a == b); 
console.log (a === c); 
console.log (a === b); 

//2.What is the spread operator?
/*
1. Spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
2. The spread operator is often used in combination with destructuring.
3. The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability.
*/
let arr1 = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr1,...arr2];
console.log(arr);

//3.What are the differences between var, let and const?
/*
          var                               let	                                const
1.The scope of a var variable  	  1.The scope of a let variable 	    1.The scope of a const variable 
  is functional scope.            is block scope.                       is block scope.
2.It can be updated and           2.It can be updated but cannot be     2.It cannot be updated or re-declared
  re-declared into the scope. 	  re-declared into the scope.	        into the scope.
3.It can be declared without      3.It can be declared without          3.It cannot be declared without
  initialization.	              initialization.	                    initialization.
*/

//4.What is execution context.
/*
1. Execution context is the concept for describing the internal working of a code. 
2. In JavaScript, the environment that enables the JavaScript code to get executed is what we call JavaScript Execution Context. 
3. It is the execution context that decides which code section has access to the functions, variables, and objects used in the code. 
4. Execution context is similar to a container that stores variables, and the code gets evaluated and then executed.
   Thus, it is the execution context that provides an environment for the specific code to get executed.
*/
let x = 10;

function timesTen(a){
    return a * 10;
}

let y = timesTen(x);

console.log(y);

//5.What is meant by first class functions.
/*
1. The first class functions are the first class citizens and are treated as the first-class object which can be stored in variables, passed as an argument in functions, returned from other functions, have their own properties.
2. These first class functions support all the operations which are allowed to other JavaScript objects.
 */
 
//6. What are closures? Give an example of closure.
/*
  1. A closure can be defined as a JavaScript feature in which the inner function has access to the outer function variable. 
  2. In JavaScript, every time a closure is created with the creation of a function.
 */
  function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();

//7. Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind().

//call(): Call is a function that helps you change the context of the invoking function.
var person1 = {firstName: 'sai', lastName: 'Kumar'};
var person2 = {firstName: 'mahi', lastName: 'sharma'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); 
say.call(person2, 'Hello'); 

//apply(): Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.

say.apply(person1, ['Hello']); 
say.apply(person2, ['Hello']);

//bind(): Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHellosai = say.bind(person1);
var sayHellomahi = say.bind(person2);

sayHellosai(); 
sayHellomahi(); 

