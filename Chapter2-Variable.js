// "In this chapter we will se the diffrent types of Varibale there scope and the  as w"

// in javascript be can define variables like this

test = "rohit"; //this is on of the worst practise to have in javascript pla aviod it as much as posible
console.log(test);

//Vairables and There Scope

// as shown in this function lastName is having function scope as Declared by var
/* this also Known as variable Hoisiting , where any variABLE DECLARED 
AT tHE bottom of function will be floated at the top of function*/

function scope1(param1) {
  var name = "rohit ";
  lastName = "tiwari";
  console.log(lastName);
  var lastName;
}

scope1();

// let's see the example of block scope( it's just u know how to write it now)

//>>>>Types of Varaible or Data Types
// This are the primetive Data types Number,String ,Boolen ,Undefined , Symbol ,Function(also a objet) ,Null
// Data type of Function is nothing but Object type because in javascript function are Object
const checkFunctionType = (param) => {
  if ("") {
    console.log(Date.now);
  }
};
console.log(typeof checkFunctionType);
// cheking undefined type
let School;
console.log(typeof School);

// chekcing for Null type
let nullType = null;
console.log(typeof nullType); // ? why typeof null is Object in js

//>>>>   ==  and ===  equalitity  of

// two same string and number variable can checked using equlaity operators
// isEqual of Java Doesn't work with JS .
/* two array an object can not be directly checked to be eaqual , even if they have the same value because they 
are stored on diffrent memory location and need to check with each value of Object */