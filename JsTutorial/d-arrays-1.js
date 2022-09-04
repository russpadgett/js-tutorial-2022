//**************************************************************************************
// ARRAYS - KVP with implicit numeric keys

export default function main() {
  //[], new Array(), Array.of - Create an array

  //index   [0:true, 1:false, 2:1, 3:2, 4:3, 5:'a', 6:'b', 7:'c', 8:{k:'v'}, 9:[0]  10:x=>x+x]];
  const a = [  true,   false,   1,   2,   3,   'a',   'b',   'c',   {k:'v'},   [0],    x=>x+x];
  console.log(a);
  console.log(new Array(true, false, 1, 2, 3, 'a', 'b', 'c', {k:'v'}, [0]));
  console.log(Array.of(true, false, 1, 2, 3, 'a', 'b', 'c', {k:'v'}, [0]));

  //COMMON ARRAY OPERATIONS
  //join, [], indexOf, includes, some, push, pop, unshift, shift, splice
  //of, forEach, concat, [...spread], slice, Array.from

  //join - Create a string from an array
  console.log(a.join(', ')); //true, false, 1, 2, 3, 'a', 'b', 'c'

  //[Bracket Notation] - Access an array item by its index
  console.log(a[0]); //true
  console.log(a[10](7)); //true

  //indexOf - Find the index of an item in an array
  console.log(a.indexOf('b')); //6

  //includes, some, every - Check if an array contains a certain item
  console.log(a.includes('b')); //true
  console.log(a.some((a) => (a = 'b'))); //true
  console.log(a.every((a) => (a != 'z'))); //true

  //push - Append an item to an array
  a.push('z');
  console.log(a);

  //pop - Remove the last item from an array
  a.pop('z');
  console.log(a);

  //unshift - Add a new first item to an array
  a.unshift('first');
  console.log(a);
  //shift - Remove the first item from an array
  a.shift('first');
  console.log(a);

  //splice - Remove multiple items from the end of an array
  const a2 = [true, false, 1, 2, 3, 'a', 'b', 'c'];
  console.log('a2: ' + a2.splice(-3)); //removed items: ['a', 'b', 'c']
  console.log('a2: ' + a2); //remaining items: [true, false, 1, 2, 3]

  //splice - Truncate an array down to just its first N items
  const a3 = [true, false, 1, 2, 3, 'a', 'b', 'c'];
  console.log('a3: ' + a3.splice(2)); //removed items: [1, 2, 3, 'a', 'b', 'c']
  console.log('a3: ' + a3); //remaining items: [true, false]

  //splice - Remove multiple items from the beginning of an array
  const a4 = [true, false, 1, 2, 3, 'a', 'b', 'c'];
  console.log('a4: ' + a4.splice(0, 2)); //removed items: [true, false]
  console.log('a4: ' + a4); //remaining items: [1, 2, 3, 'a','b','c']

  //splice - Remove a single item by index
  const a5 = [true, false, 1, 2, 3, 'a', 'b', 'c'];
  console.log('a5: ' + a5.splice(3, 1)); //removed items: [2]
  console.log('a5: ' + a5); //remaining items: [true, false, 1, 3, 'a','b','c']

  //splice - Remove multiple items by index
  const a6 = [true, false, 1, 2, 3, 'a', 'b', 'c'];
  console.log('a6: ' + a6.splice(2, 3)); //removed items: [1, 2, 3]
  console.log('a6: ' + a6); //remaining items: [true, false, 'a','b','c']

  //splice - Replace multiple items in an array
  const a7 = [true, false, 1, 2, 3, 'a', 'b', 'c'];
  console.log('a7: ' + a7.splice(5, 3, 'x', 'y', 'z')); //removed items: ['a','b','c']
  console.log('a7: ' + a7); //remaining items: [true, false, 1, ,2 ,3, 'x','y','z']

  //of - Iterate over an array
  console.log('---------');
  for (const e of a) console.log(`e1: ${e}`);
  console.log('---------');

  //forEach - Call a function on each element in an array
  console.log('---------');
  a.forEach((e, i, a) => console.log(`e2: ${e}`));
  console.log('---------');

  //concat - Merge multiple arrays together
  console.log([true, false, 1, 2, 3].concat(['a', 'b', 'c']));

  //[...spread], slice, Array.from - Copy an array
  const aa1 = [...a]; //spread
  console.log(`aa1: ${aa1}`);
  const aa2 = a.slice('');
  console.log(`aa2: ${aa2}`);
  const aa3 = Array.from(a);
  console.log(`aa3: ${aa3}`);

  //CHESS BOARD BONUS
  //Creating a two-dimensional array
  const board = [
    ['|R|','|N|','|B|','|Q|','|K|','|B|','|N|','|R|'],
    ['|P|','|P|','|P|','|P|','|P|','|P|','|P|','|P|'],
    ['| |','| |','| |','| |','| |','| |','| |','| |'],
    ['| |','| |','| |','| |','| |','| |','| |','| |'],
    ['| |','| |','| |','| |','| |','| |','| |','| |'],
    ['| |','| |','| |','| |','| |','| |','| |','| |'],
    ['|p|','|p|','|p|','|p|','|p|','|p|','|p|','|p|'],
    ['|r|','|n|','|b|','|q|','|k|','|b|','|n|','|r|'] ];
  
  console.log(`${board.join('\n')}`);
  
  // Move King's Pawn forward(up) 2
  board[4][4] = board[6][4];//move to current position
  board[6][4] = '[ ]';//show last position
  console.log(board.join('\n'));

  // Move Queen's Knight forward(down) 2, right 1
  board[6][4] = '| |';//clear last move
  board[2][2] = board[0][1];//move to current position
  board[0][1] = '[ ]';//show last position
  console.log(board.join('\n'));

  return '';
}
