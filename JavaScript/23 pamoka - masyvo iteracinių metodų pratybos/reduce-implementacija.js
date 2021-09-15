class Masyvas {
  constructor(...args) {
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
    }
    this.length = args.length;
  }

  reduce = (callbackFn, initialValue) => {
    if (this.length === 0) return undefined;
    let accumulator;
    let startIndex;
    if (initialValue === undefined) {
      accumulator = this[0];
      startIndex = 1;
    } else {
      accumulator = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
    return accumulator;
  }
}

const tikrasMasyvas = new Array(1, 2, 3, 4);
const manoMasyvas = new Masyvas(1, 2, 3, 4);

console.log({
  tikrasMasyvas,
  manoMasyvas,
});

console.log({
  sumaNaudojantTikroMasyvoReduce: tikrasMasyvas.reduce((sum, el) => sum + el, 10),
  sumaNaudojantManoMasyvoReduce: manoMasyvas.reduce((sum, el) => sum + el, 10)
})