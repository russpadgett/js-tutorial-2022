export default function main() {
  /*************************************************************************
   * calling add returns an anonymous function expecting 'b' as its input
   * if b exists, it sums it with 'a' and recursively calls add again
   * else, it returns just 'a'
   *************************************************************************/
  function add(a) {
    return function (b) {
      if (b) {
        console.log(`BOTH a and b exist, recursively calling add(${a}+${b})`);
        return add(a + b);
      }

      console.log(`ONLY a exists, returning a: ${a}`);
      return a;
    };
  }

  console.log(add(5)());
  //             (a)()  only a exists
  
  console.log(add(5)(6)());
  //             (a)(b)    both a and b exists
  //                (a)()  only a exists
  
  console.log(add(5)(6)(7)());
  //             (a)(b)       both a and b exists
  //                (a)(b)    both a and b exists
  //                   (a)()  only a exists
  

  const subtract = a => b => b ? subtract(a - b) : a;
  console.log(subtract(30)(4)(7)());

  return '';
}
