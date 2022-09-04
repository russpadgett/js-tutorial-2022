export default class wordFinder {
  constructor(words) {
    this.dict = [];
    for (let i = 0; i < 25; i++) this.dict.push([]);
    if (words)
      words.forEach((w) =>
        this.dict[w.length].includes(w)
          ? 'skip'
          : this.dict[w.length].push(w)
      );
      console.log(JSON.stringify(this.dict))
  }
  add(words) {
    if (words)
      words.forEach((w) =>
        this.dict[w.length].includes(w)
          ? 'skip'
          : this.dict[w.length].push(w)
      );
      console.log(JSON.stringify(this.dict))
  }
  search(searchWord = '') {
    let searchWordClean = '';
    //remove and track wild card from search word *
    const wildCardIndexes = [];
    searchWord.split('').forEach((c, i) => {
      c === '*' ? wildCardIndexes.push(i) : (searchWordClean += c);
    });
    //remove equiv * position from dict word and match
    return this.dict[searchWord.length]?.filter((wordInDict) => {
      let wordInDictClean = '';
      for (let i = 0; i < wordInDict.length; i++) {
        if (!wildCardIndexes.includes(i))
          wordInDictClean += wordInDict.charAt(i);
      }
      if (searchWordClean.startsWith(wordInDictClean)) return true;
      return false;
    });
  }
}

//convert string to array and reduce excluding certain letters, returning as string
//const aaa = 'cure'
//const ccc = aaa.split('').reduce((a,e,i)=>{
//    if(!wildCardIndexes.includes(i))
//        a.word = Object.entries(a).length === 0? e : a.word + e;
//    return a;
//},{});
//console.log('ccc: ' + ccc.word);
