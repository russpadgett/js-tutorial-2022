export default function main() {
  //////////////////////////////////////////////////////////
  // ES5

  function SumES5_for(a, b) {
    let s = 0;
    for (const i in arguments) {
      s += arguments[i];
    }
    return s;
  }
  console.log('SumES5_for: ' + SumES5_for(1, 2, 3));

  function SumES5_forEach(a, b) {
    let s = 0;
    [...arguments].forEach((n) => (s += n));
    return s;
  }
  console.log('SumES5_forEach: ' + SumES5_forEach(1, 2, 3, 4));

  function SumES5_reducer(a, b) {
    return [...arguments].reduce((i, n) => (i += n));
  }
  console.log('SumES5_reducer: ' + SumES5_reducer(1, 2, 3, 4, 5));

  //////////////////////////////////////////////////////////
  // ES6

  const SumES6 = (...args) => args.reduce((i, n) => i + n);
  console.log('SumES6: ' + SumES6(1, 2, 3, 4));

  const MaxES6 = (...args) => args.reduce((i, n) => (i < n ? n : i));
  console.log('MaxES6: ' + MaxES6(1, 2, 8, 3, 4));

  /////////////////////////////////////////////////////////
  // FACTORY

  function factory() {
    return (a, b) => a + b;
  }
  const sum1 = factory();
  const sum2 = factory();
  sum1(1, 2); // => 3
  sum2(1, 2); // => 3
  console.log(sum1 === sum2); // => false
  console.log(sum1 === sum1); // => true

}
