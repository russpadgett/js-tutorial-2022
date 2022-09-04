export default function main() {
  const arr1to6 = [1, 2, 3, 4, 5, 6];

  //REDUCER VALUES OF ARRAY ELEMENTS ******************************************
  //reduce is like a forEach with a built-in accumulator (s, a, or o)
  //reduce(function(acc, itm, idx), accType)

  //reduce - Return max item
  console.log(
    arr1to6.reduce((a, v, i) => {
      return a > v ? a : v;
    })
  ); //6

  //emulate OBJECT reducer using forEach
  console.log('-----------------------------------------');
  //{"0":1,"1":2,"2":3,"3":4,"4":5,"5":6}
  console.log('create an object {i:v,...}');

  //forEach
  const objAcc = {};
  arr1to6.forEach((v, i) => {
    console.log(`o:${JSON.stringify(objAcc)} v:${v} i:${i}`);
    objAcc[i] = v; //key:value
  });
  console.log(JSON.stringify(objAcc));

  //reduce
  console.log(
    JSON.stringify(
      arr1to6.reduce((o, v, i) => {
        console.log(`o:${JSON.stringify(o)} v:${v} i:${i}`);
        o[i] = v;
        return o;
      }, {})
    )
  );

  //reduceRight
  console.log(
    JSON.stringify(
      arr1to6.reduceRight((o, v, i) => {
        console.log(`a:${JSON.stringify(o)} v:${v} i:${i}`);
        o[i] = v;
        return o;
      }, {})
    )
  );

  //emulate ARRAY reducer
  console.log('-----------------------------------------');
  //[1,2,3,4,5,6]
  console.log('create an array [v,...]');

  //forEach
  let arrAcc = [];
  arr1to6.forEach((v, i) => {
    console.log(`a:${JSON.stringify(arrAcc)} v:${v} i:${i}`);
    arrAcc.push(v);
  });
  console.log(JSON.stringify(arrAcc));

  //reduce
  console.log(
    JSON.stringify(
      arr1to6.reduce((a, v, i) => {
        console.log(`a:${JSON.stringify(a)} v:${v} i:${i}`);
        a.push(v);
        return a;
      }, [])
    )
  );

  //reduceRight
  console.log(
    JSON.stringify(
      arr1to6.reduceRight((a, v, i) => {
        console.log(`a:${JSON.stringify(a)} v:${v} i:${i}`);
        a.push(v);
        return a;
      }, [])
    )
  );

  console.log('-----------------------------------------');
  console.log('create array of objects [{i:v},...]');
  //[{"0":1},{"1":2},{"2":3},{"3":4},{"4":5},{"5":6}]
  console.log(
    JSON.stringify(
      arr1to6.reduce((a, v, i) => {
        console.log(`a:${JSON.stringify(a)} v:${v} i:${i}`);
        a.push({ [i]: v });
        return a;
      }, [])
    )
  );

  console.log(
    JSON.stringify(
      arr1to6.reduceRight((a, v, i) => {
        console.log(`a:${JSON.stringify(a)} v:${v} i:${i}`);
        a.push({ [i]: v });
        return a;
      }, [])
    )
  );  
}
