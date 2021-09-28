class LocalStorageService {
  constructor(root) {
    this.root = root;
    const data = localStorage[root];
    if (data) {
      this.data = JSON.parse(data);
    } else {
      this.data = {};
      this.synchronize();
    }
  }

  generateId = (collectionName) => {
    const idArray = Object.keys(this.data[collectionName]);
    if (idArray.length === 0) {
      return '0';
    }
    const max = Math.max(...idArray.map(id => Number(id)));
    return String(max + 1);
  }

  synchronize = () => {
    localStorage[this.root] = JSON.stringify(this.data);
  }

  addCollection = (name) => {
    if (!this.data[name]) {
      this.data[name] = {};
      this.synchronize();
    }
  }

  removeCollection = (name) => {
    if (this.data[name]) {
      delete this.data[name];
      this.synchronize();
    }
  }

  addItem = (item, collection) => {
    if (!this.data[collection]) {
      this.addCollection(collection);
    }
    const newid = this.generateId(collection);
    this.data[collection][newid] = item;
    this.synchronize();
  }

  removeItem = (id, collection) => {
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
          jeigu bandoma pašalinti elementą, pagal <id> ir <collection> ir jis randamas - taip ir padaryt
          jeigu bandoma pašalinti elementą, pagal <id> ir <collection> ir jis NĖRA randamas - nieko nedaryt
    */
  }
}

const authStorageService = new LocalStorageService('auth');
authStorageService.addItem(7, 'testineKolekcija');
authStorageService.addItem(7, 'testineKolekcija');
authStorageService.addItem(7, 'testineKolekcija');
authStorageService.addItem(7, 'testineKolekcija');
authStorageService.addItem(7, 'testineKolekcija');