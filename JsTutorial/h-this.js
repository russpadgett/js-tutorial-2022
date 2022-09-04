/**************************************************************************************
  THIS
    undefined in strict mode
    bound to global scope
    when in OBJECT FUNCTIONS (methods) 
      bound to its object
      when using bind(), apply(), call() - binds to said object
*/
export default function main() {
  console.log(this);

  const obj1 = {
    p1: 'b',
    p2: ['a', 'b', 'c'],
    f1: function () {
      console.log(this);
      //*ONLY use es6 ARROW FUNCTION to prevent creating a new 'this' binding
      return this.p2.filter((p) => p !== this.p1);
    },
  };
  const obj2 = { p1: 'y', p2: ['x', 'y', 'z'] };

  //THIS binding to different object
  //bind, apply, call
  console.log(obj1.f1());
  console.log(obj1.f1.bind(obj2)());
  console.log(obj1.f1.apply(obj2));
  console.log(obj1.f1.call(obj2));

  return '';
}
