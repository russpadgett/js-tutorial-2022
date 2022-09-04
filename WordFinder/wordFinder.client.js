import wf from './wordFinder.server.js';
    
export default function main(){

    const wordFinder = new wf([
    'bat',
    'bay',
    'car',
    'cat',
    'bait',
    'base',
    'bare',
    'care',
    'dare',
    'fair',
    'based',
    ]);

    wordFinder.add(['chased'])
    const words = wordFinder.search('*a*')
    console.log('-------------------------------------------'.padEnd(50,'-'))
    console.log(JSON.stringify(words));

    //more advanced implementations can be controlled by the # of wildcards
    console.log('starts with c search ----------------------'.padEnd(50,'-'))
    for(let i = 3; i <= 7; i++){
        console.log(wordFinder.search('c'.padEnd(i, '*')));
    }

    console.log('car missing character search ---------------'.padEnd(50,'-'))
    'car'.split('').forEach((v,i,a) =>{
        let aa = [...a];
        aa[i]='*'
        console.log(wordFinder.search(aa.join('')));
    })

    console.log('cra transposed character search ---------------'.padEnd(50,'-'))
    'cra'.split('').forEach((v,i,a) =>{
        let aa = [...a];
        if(i < a.length-1){
            aa[i]=a[i+1];//first char <- second char
            aa[i+1]=a[i];//first char -> second char
            console.log(wordFinder.search(aa.join('')));
        }
    })

}