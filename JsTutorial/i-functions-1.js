//**************************************************************************************
// FUNCTIONS (METHODS) / HOISTING / SCOPE
//      Hoisted Functional  Named                Anonymous     Declared
// ES6  No      expression  const Name = ()=>{}  ()=>{}        1/ScopeB
// ES5  Yes     declaration function Name(){}    function(){}  n/ScopeF

export default function main() {
  //anonymous functions in interators
  //traditional
  'a'.split('').forEach(function (c) {
    console.log(c);
  });
  //arrow function expresson
  'a'.split('').forEach((c) => console.log(c));

  //anonymous function
  console.log(
    (function (a = 10) {
      return 2 * a;
    })()
  );

  //named functions
  function namedFunction(arg) {
    console.log(arg);
    console.log(...arguments); //array of arguments
    return '';
  }
  namedFunction(1, 2, 3);

  const functionExpression = function (arg) {
    console.log(arg);
    console.log(...arguments); //array of arguments
    return '';
  };
  functionExpression(1, 2, 3);

  const arrowFuncExpression = (arg) => {
    /*
  Arrow functions:
  - new to ES6
  - don't have access to the new.target keyword
  - don't have the following their own bindings to this
  - don't have arguments or super
  - should not be used as methods.
  - aren't suitable for call, apply and bind methods for scoping.
  - cannot be used as constructors.
  - cannot use yield, within its body.
  */
    console.log(arg);
    //arguments array does not exist in arrow functions
    return '';
  };
  //export default arrowFunc;
  arrowFuncExpression(1, 2, 3);
}
