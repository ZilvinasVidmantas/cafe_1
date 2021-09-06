// Objekto savybių naudojimas, kuomet jas gauname string pavidalu
const savybeKuriaNorimeKeisti = 'dydis';
const kebabas = {
  dydis: 'xl',
  padazas: 'cesnakinis',
  suStixais: true
};
console.log(kebabas.dydis, kebabas.padazas);
console.log(kebabas[savybeKuriaNorimeKeisti]);