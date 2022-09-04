  //***********************************************************************************
  //OBJECT - Array of KVPs - Keys are UNIQUE KEY and LAST Set wins

  export default function main() {
  const obj = {key: 'value'};

  //Creating a Declarative OBJECT
  const obj1 = {
    p1: { p1F: 'P1F', p1L: 'p1L' },
    p2: 'P2',
    p2: 'P2P2',
    p3: ['p3-A', 'p3-B'],
    m1(a) {
      return a;
    },
    m2() {
      return `${this.p1.p1F} ${this.p1.p1L}`;//'this' keyword refers to obj1
    },
  };

  //Read OBJECT data by bracket or dot notation
  console.log(obj1['p2']);//P2P2
  console.log(obj1.p2);//P2P2

  //***********************************************************************************
  //OBJECT PROPERTIES AND METHODS
  //Add Runtime Object Properties and Methods
  obj1['p1']['p1M'] = 'P1M';
  obj1['p3'] = 'P13';
  obj1.m3 = function () {
    return 'm3';
  };
  const K = 'KEY';
  obj1[K] = 'VALUE';

  //reading/executing - runtime use bracket notation
  console.log(obj1[K]); //VALUE
  console.log(obj1['p1']['p1F']); //P1F
  console.log(obj1['p3'][0]); //P
  console.log(obj1['m1']()); //P1F is P2

  //reading/executing - declarative dot notation
  console.log(obj1.p1.p1F); //P1F
  console.log(obj1.p3[0]); //P
  console.log(obj1.m1()); //P1F is P2

  //updating
  obj1.p2 = 45;
  obj1['p1']['p1L'] = 'P1L';

  //delete property 'c'
  console.log(JSON.stringify(obj1));
  delete obj1.p3;
  console.log(JSON.stringify(obj1));

  //META - typeof
  console.log(typeof obj1); //object
  console.log(typeof obj1 !== 'undefined' && obj1 !== null); //true

  /*******************************************************************************/
  //BONUS - Declaratively building this object
  //{"name":{"primary":{"first":"fName","last":"lName"},"nickname":"nName"}}
  const object1 = {};
  object1.name = {};
  object1.name.primary = {};
  object1.name.primary.first = {};
  object1.name.primary.first = 'fName';
  object1.name.primary.last = {};
  object1.name.primary.last = 'lName';
  object1.name.nickname = {};
  object1.name.nickname = 'nName';
  console.log(JSON.stringify(object1));
  console.log(object1.hasOwnProperty('name')); //true

  //Creating a Functional Object
  // function Obj(p1) {
  //   //'this' keyword is required by function properties and methods 
  //   this.p1 = p1;   
  //   this.m1 = function () {
  //     return this.p1;
  //   };
  //   this.m2 = () => this.p1;
  // }
  // //'new' keyword is required to instantiate Functional Objects
  // const obj2 = new Obj('P1');

  return '';
}
