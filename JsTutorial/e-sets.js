export default function main() {
  const mySet1 = new Set();

  //Sets of objects, MUST USE OBJECT REFERENCE
  const objA = { A: 'a', A: 'a' };
  console.log(new Set([objA, objA]).size); //1
  console.log(
    new Set([
      { A: 'a', A: 'a' },
      { A: 'a', A: 'a' },
    ]).size
  ); //2

  const arrA = [1, 1];
  console.log(new Set([arrA, arrA]).size); //1
  console.log(
    new Set([
      [1, 1],
      [1, 1],
    ]).size
  ); //2

  //add, has, size, delete,

  //add
  mySet1.add(1); // Set [ 1 ]
  mySet1.add(5); // Set [ 1, 5 ]
  mySet1.add(5); // Set [ 1, 5 ]
  mySet1.add('some text'); // Set [ 1, 5, 'some text' ]
  const o = { a: 1, b: 2 };
  mySet1.add(o);

  mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

  //has
  console.log(mySet1.has(1)); // true
  console.log(mySet1.has(3)); // false, since 3 has not been added to the set
  console.log(mySet1.has(5)); // true
  console.log(mySet1.has(Math.sqrt(25))); // true
  console.log(mySet1.has('Some Text'.toLowerCase())); // true
  console.log(mySet1.has(o)); // true

  //size
  console.log(mySet1.size); // 5

  //delete
  mySet1.delete(5); // removes 5 from the set
  console.log(mySet1.has(5)); // false, 5 has been removed

  console.log(mySet1.size); // 4, since we just removed one value

  mySet1.add(5); // Set [1, 'some text', {...}, {...}, 5] - a previously deleted item will be added as a new item, it will not retain its original position before deletion

  console.log('----------------------');
  for (const e of mySet1)
    typeof e === 'object'
      ? console.log(`${JSON.stringify(e)}`)
      : console.log(`${e}`);
  console.log('----------------------');
}
