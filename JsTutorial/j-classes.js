//**************************************************************************************
// CLASSES
// must be defined before they can be constructed.

export default function main() {
  //ES6 Class Declaration

  //const MyClass = class {
  class MyClass {
    constructor(arg) {
      console.log(...arg);
      console.log(...arguments);
      this.p = arg;
    }

    // Public Property
    get P() {
      return this.p;
    }
    set P(v) {
      return (this.p = v);
    }
    // Method
    main() {
      console.log('MyClass.main');
      return '<h1>class method</h1>';
    }
  }

  const c = new MyClass('1', '2', '3');
  c.main();
  c.P = 'Q';
  console.log(c.P)
}
