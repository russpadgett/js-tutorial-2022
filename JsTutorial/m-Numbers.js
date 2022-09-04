export default function main() {
  //Numbers are Always 64-bit Floating Point

  //Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
  console.log(999999999999999); //pass x will be             999999999999999
  console.log(9999999999999999); //fail y will be          10000000000000000
  console.log(99999999999999999); //fail y will be        100000000000000000
  console.log(999999999999999999); //fail y will be      1000000000000000000
  console.log(9999999999999999999); //fail y will be    10000000000000000000
  console.log(99999999999999999999); //fail y will be  100000000000000000000
  console.log(999999999999999999999); //fail y will be 1e+21

  console.log(0+9999999999999998)//pass
  console.log(0+9999999999999999)//fail
  console.log(1+9999999999999998)//fail
  
  console.log(1+9999999999999997)//fail
  console.log(2+9999999999999996)//pass
  
  function Add(a, b) {
    //accurate ONLY up to 0, 9999999999999998
    return (a * 10 + b * 10) / 10;
  }
  console.log(Add(0.1, 0.2));
  console.log(Add(0.1, 0.7));
  console.log(Add(0.7, 0.2));
  console.log(Add(0.2, 0.7));
  console.log(Add(0,9999999999999998));//pass
  console.log(Add(0,9999999999999999));//fail
  console.log(Add(0,10000000000000000));//pass
  console.log(Add(9000000000000000,999999999999998));//pass
  console.log(Add(9000000000000000,999999999999999));//fail
  console.log(Add(90000000000000000,9999999999999999));//fail
  
}
