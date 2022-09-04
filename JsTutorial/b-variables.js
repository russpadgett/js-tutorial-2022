export default function main() {
  /*
    DATATYPES
    There are 4 Ways to Declare a JavaScript Variable: var, let, const, or nothing.
    Best Practice is to ONLY use let and const.
    The datatype is inferred at runtime based on what you assign to it.  
*/

  /////////////////////////////////////////////////////////////
  //STORING INDIVIDUAL DATA ELEMENTS
  //boolean
  let b = false;
  
  //numbers or 64-bit Floating Point
  let n = 1; 
  
  //strings
  let s = 'a'; 

  //constants
  const pi = 3.1415;
  
  /////////////////////////////////////////////////////////////
  //STORING COLLECTIONS OF DATA ELEMENTS

  //object - explicit named key arrays
  const O1 = {b:b, n:n, s:s, o:{k:'v'}, a:[0], f:x=>x+x};
  
  //arrays - implicit key arrays
  //         [0:b, 1:n, 2:s, 3:{k:'v'}, 4:[0], 5:x=>x+x];
  const A1 = [  b,   n,   s,   {k:'v'},   [0],   x=>x+x]; 
  
  //sets - unique arrays
  const S = new Set();
  S.add('a'); 
  
  //maps - iterable objects
  const M = new Map();
  M.set('k', 'v'); 
  
  /////////////////////////////////////////////////////////////
  //ENCAPSULATION OF DATA ELEMENTS AND LOGIC
  //traditional functions
  function func(){return ''}
  
  //function expressions
  const f = function () {return ''};

  //ES6 arrow functions
  const af = x => x+x

  //ES6 classes
  class C{ }
  return 'Hello World';
}
