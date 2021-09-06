class IceCream {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class IceCreamExtra {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

function calcPrice(iceCream) {
  console.group(`Calculating ${iceCream.name} iceCream price.`)
  const extras = [];
  function addExtra(addon) {
    console.log(`Added ${addon.name} to ${iceCream.name} iceScream.`);
    extras.push(addon);
  }
  function calc() {
    const price = iceCream.price + extras.reduce((acc, { price }) => acc + price, 0);
    console.groupEnd();
    return price;
  }
  function determineAction(potencialExtra) { // Rukursinė funkcija - 
    if(potencialExtra === undefined) return calc(); // Rekursinės funkcijos baigtinė salyga
    else { // Rekursinės funkcijos (netiesioginis) imties maižinimas - žingsnis link baigtinės salygos
      addExtra(potencialExtra);
      return determineAction;
    }
  }
  return determineAction;
}

const chocolateIceCream = new IceCream('Chocolate', 1.99);
const vanillaIceCream = new IceCream('Vanilla', 1.79);

const syrupOrange = new IceCreamExtra('Orange syrup', 0.49);
const sprinkles = new IceCreamExtra('Sprinkles', 0.29);
const cream = new IceCreamExtra('Cream', 0.79);

const chPrice = calcPrice(chocolateIceCream)();
const chWithSyrupPrice = calcPrice(chocolateIceCream)(syrupOrange)();
const chWithSyrupWithCreamPrice = calcPrice(chocolateIceCream)(syrupOrange)(cream)();
const chWithSyrupWithCreamSpriclePrice = calcPrice(chocolateIceCream)(syrupOrange)(sprinkles)(cream)();
console.log({
  chPrice,
  chWithSyrupPrice,
  chWithSyrupWithCreamPrice,
  chWithSyrupWithCreamSpriclePrice
});