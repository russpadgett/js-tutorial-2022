export default function main() {
  let text = 'The rain in SPAIN stays mainly in the plain';
  let copy = text
  copy = 'The rain in TEXAS stays mainly in the plain';
  copy = undefined;
  
  //PARSE - returns characters
  console.log(String.fromCharCode(97,98,99));//abc
  const start = 1;
  const pos = 2;
  const posB = -2;
  const end = 3;
  const length = 4;
  console.log(text.at(pos)); //e
  console.log(text.at(posB)); //i
  console.log(text.charAt(pos))//e
  console.log(text.charCodeAt(pos))//101
  console.log('abcd'.concat('e'));//abcde
  console.log(text.match(/ain/g)); //['ain','ain','ain']
  console.log([...'Atest1A Btest2B'.matchAll(/t(e)(st(\d?))/g)]);//[[],[]] 
  console.log('abcd'.padEnd(6, '.'))//abcd..
  console.log('abcd'.padStart(6, '.'))//..abcd
  console.log('abcd'.repeat(2))//abcdabcd
  console.log('a*c*'.replace('*',''))//ac*
  console.log('a*c*'.replaceAll('*',''))//ac
  console.log(text.slice(start, end)); //he
  console.log('a*c*'.split(''))//['a','*','c','*']
  console.log(text.substring(start, end)); //he
  console.log(text.substr(start, length)); //he r
  
  //META - returns info
  console.log(text.endsWith('in', 8)); //true
  console.log(text.includes('in', 41)); //true
  console.log(text.indexOf('in', 15)); //26
  console.log(text.lastIndexOf('in', 15)); //9
  console.log(text.length); //43
  console.log(text.search(/in/g)); //6
  console.log(text.startsWith('in', 6)); //true
  
  //BONUS USAGE
  const objA = [[]]//replicate acc with and initial []
  objA[0]=(objA[0]+'B')//replace
  objA.splice(0, 1, objA[0]+'B'); //1 for replace
  console.log(objA)
  

  console.log('=====================================================================')
  const a = 'a*c*'.split('')//['a','*','c','*']
  a.splice(3, 1);//['a','*','c',]
  a.splice(1, 1);//['a','c']
  const b = a.join(''); //ac
  console.log(b);
  console.log('=====================================================================')
  const aa = 'abcd'
  const bb = aa.substring(0,3-1) + aa.substring(3);//3
  const cc = bb.substring(0,1-1) + bb.substring(1);//1
  console.log(`cc: ${cc}`);
  console.log('=====================================================================')
  const aaa = 'abcd'
  const bbb = aaa.split('').reduce((a,e,i)=>{
      ![1,3].includes(i) && a.push(e);
      return a;
  },[]).join('');
  console.log(bbb);

  //convert string to array and reduce excluding certain letters, returning as string
  const ccc = aaa.split('').reduce((a,e,i)=>{
      return [1,3].includes(i) ? a : a + e;
  },{});
  console.log(ccc);

  console.log('=====================================================================')



}
