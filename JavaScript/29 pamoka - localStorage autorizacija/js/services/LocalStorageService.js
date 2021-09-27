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
    // Įgalinti šį metodą:
    //  Reikalavimai:
    //    pabaigoje kiekvieno metodo <this.data> turi supatpti su <localStorage[data]>
    //    jeigu bandoma ištrinti kolekcija kuri yra - ji panaikinama
    //    jeigu bandoma ištrinti kolekcija kurios nėra nieks nevykdoma
  }

  addItem(item, collection) {

  }

  removeItem(id) {

  }
}


const authStorage = new LocalStorageService('auth');
authStorage.addCollection('users');
authStorage.removeCollection('tokiosNera');
authStorage.removeCollection('users');