export default function main() {
  //*****************************************************************************
  //MAP - Iterable Object - Array of KVPs - Keys are UNIQUE KEY and LAST Set wins
  //*****************************************************************************

  const obj0 = {
    'KEY 1': 'VALUE 1',
    'KEY 2': 'VALUE 2',
    'KEY 3': 'VALUE 3',
  };

  //Object.keys, values, entries - OBJECTs are NOT iterable.
  var obj0Keys = Object.keys(obj0);
  var obj0Values = Object.values(obj0);
  var obj0Entries = Object.entries(obj0);

  //new, set, forEach, get, delete, has
  const m = new Map([]);
  Object.entries(obj0).forEach((obj) => {
    m.set(obj[0], obj[1]);
  });
  m.forEach((v, k, m) => {
    console.log(`key=[${k}]:value=[${v}]`);
  });
  console.log(...m.get('KEY 2'));
  console.log(m.delete('KEY 2'));
  console.log(m.has('KEY 2'));

  //create a MAP of KVPs manually - note the array like [[]] bracket syntax
  const m1 = new Map([
    ['KEY 1', 'VALUE 1'],
    ['KEY 2', { a: 1, b: 2 }],
    ['KEY 3', [1, 2]],
  ]);
  m1.set('KEY 1', 'VALUE A');
  m1.forEach((v, k, m) => {
    if (typeof v === 'object') console.log(`k=[${k}]:v=[${JSON.stringify(v)}]`);
    else console.log(`k=[${k}]:v=[${v}]`);
  });

  return '';
}
