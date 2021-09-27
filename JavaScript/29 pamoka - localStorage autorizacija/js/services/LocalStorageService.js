class LocalStorageService {
  constructor(root) {
    this.root = root;
    const data = localStorage[root];
    if (data) {
      this.data = JSON.parse(data);
    } else {
      this.data = {};
      localStorage[root] = JSON.stringify(this.data);
    }
  }

  addCollection(name) {
    if (!this.data[name]) {
      this.data[name] = [];
      localStorage[this.root] = JSON.stringify(this.data);
    }
  }

  removeCollection(name) {
    if (this.data[name]) {
      delete this.data[name];
      localStorage[this.root] = JSON.stringify(this.data);
    }
  }

  addItem(item, collection) {
    if (!this.data[collection]) {
      this.addCollection(collection);
    }
    this.data[collection].push(item);
    localStorage[this.root] = JSON.stringify(this.data);
  }

  removeItem(id, collection) {
    /*
      Aplikacijose dažnai būna, jog įrašai (pvz.: objektai masyvuose) turi tas pačias reikšmes, pvz:
        { brand: 'BMW', model: 'X'} ir { brand: 'BMW', model: 'X'}
        { name: 'Jonas', surname: 'Petraitis'} ir { name: 'Jonas', surname: 'Petraitis' }
      Yra buvę atvejų (ir ne sykį), jog įvedant duomenis sutampa ir asmens kodai, ir Regitros numeriai. Ypač senose sistemose.
      Todėl daiktų identifikavimui yra kuriami UNIKALŪS identifikavimo raktai - id
      Id raktai mums reikalingi kad galėtume šalinti, keisti reikšmes. Todėl kuriant elementus, būtina jiems suteikti identifikavimo raktus

      Tam, kad įgalinti trinimą:
        Papildykite metodo addItem logiką:
          Pridedant elementą, suteikite jam papildomą savybę: <id>
             Sugalvokite logiką, jog niekada nesikartotų id savybės tarp tos pačios kolekcijos elementų
        Sukurkite šio metodo (removeItem) logiką:
          jeigu bandoma pašalinti elementą, pagal <id> ir <collections> ir jis randamas - taip ir padaryt
          jeigu bandoma pašalinti elementą, pagal <id> ir <collections> ir jis NĖRA randamas - nieko nedaryt
    */
  }
}


const authStorage = new LocalStorageService('auth');
// authStorage.addItem({ email: 'admin@gmail.com', password: 'admin1' }, 'abc');
// authStorage.addItem({ email: 'admin@gmail.com', password: 'admin1' }, 'users');
// authStorage.addItem({ email: 'admin@gmail.com', password: 'admin1' }, 'admins');