export default function main(){
/***************************************************************************
 * calculate performs math function and stores as total then returns itself
 ***************************************************************************/

const calc = {
  total:0,
  add(a){
    this.total += a;
    return this;//calc object
  },
  subtract(x){
    this.total -= x;
    return this;
  },
  multiply(x){
    this.total *= x;
    return this;
  },
  divide(x){
    this.total /= x;
    return this;
  },
  square(){
    this.total = Math.pow(this.total, 2);
    return this;
  },
  pow(x){
    this.total = Math.pow(this.total, x);
    return this;
  }
}

const result = calc.add(10).add(20).multiply(2).subtract(50).square().pow(.5);
console.log(result.total);

return '';
}