/***************************************************************************************
    VARIABLES (PROPERTIES) / HOISTING / SCOPE (global, function, block)
           Hoisted Init  Declared  Assigned  DataType
    var    Yes     Yes   n/ScopeF  n/ScopeF  (B,N,S)
    let    Yes     No    1/ScopeB  n/ScopeB  (B,N,S)
    const  Yes     No    1/ScopeB  1/ScopeB  (B,N,S,O,A)

    var declarations are preprocessed and hoisted to the top of the function.
    var assignments are done where they exist in the code.
    BEST PRACTICE is to ALWAYS declare your variable at the top of the function.
*/
export default function main() {
  //ALL vars are hoisted here during preprocessing

  v = 'vInFunc';
  var v;
  var v;
  let l;
  const c = 'cInFunc';

  v = 'vInFunc';
  l = 'lInFunc';
  console.log(`PRE BLOCK: v:${v}, l:${l}, c:${c}`); // vInFunc, lInFunc, cInFunc

  {
    var v; //hoisted to top of function
    let l;
    const c = 'cInBlock';

    v = 'vInBlock';
    l = 'lInBlock';
    console.log(`IN BLOCK: v:${v}, l:${l}, c:${c}`); // vInBlock, lInBlock, cInBlock
  }

  console.log(`POST BLOCK: v:${v}, l:${l}, c:${c}`); // vInBlock, lInFunc, cInFunc

  return '';
}
