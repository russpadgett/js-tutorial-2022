export default function main() {
  /******************************************************************************
   * memoize take in the function clumsyProduct
   * - if prevResults for inputs dont exist
   * -   clumsyProduct is called and results are cached
   * - cached results are returned for inputs
   * clumbsyProduct returns the product after the simulated long running process
   * memoizedClumzyProduct wraps memoize with clumsyProduct
   * memoizedClumzyProduct(9467, 7649) executes the process
   ******************************************************************************/

  function memoize(fn) {
    console.log(`myMemoize: ${fn.name}`);
    const prevResultsObj = {};

    return function (...args) {
      console.log('myMemoize-function');
      var argsCache = JSON.stringify(args);
      if (!prevResultsObj[argsCache]) {
        //res[argsCache] = fn.bind(this)(...args);
        prevResultsObj[argsCache] = fn.call(this, ...args);
      }
      return prevResultsObj[argsCache];
    };
  }

  const clumsyProduct = (n1, n2) => {
    console.log('clumsyProduct');
    for (let i = 0; i < 1000000000; i++) {}
    return n1 * n2;
  };

  const memoizedClumzyProduct = memoize(clumsyProduct);

  console.log('============================================');
  const d1S = new Date();
  memoizedClumzyProduct(9467, 7649);
  console.log(`processing elapsed time: ${new Date() - d1S}`);

  console.log('============================================');
  const d2S = new Date();
  memoizedClumzyProduct(9467, 7649);
  console.log(`processing elapsed time: ${new Date() - d2S}`);
}
