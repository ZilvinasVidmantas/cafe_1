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
    if (idArray.length === 0) return '0';
    const max = Math.max(...idArray.map(id => Number(id)));
    return String(max + 1);
  }

  synchronize = () => {
    localStorage[this.root] = JSON.stringify(this.data);
  }

  addCollection = (collectionName) => {
    if (!this.data[collectionName]) {
      this.data[collectionName] = {};
      this.synchronize();
    }
  }

  removeCollection = (collectionName) => {
    if (this.data[collectionName]) {
      delete this.data[collectionName];
      this.synchronize();
    }
  }

  addItem = (item, collectionName) => {
    if (!this.data[collectionName]) {
      this.addCollection(collectionName);
    }
    const newId = this.generateId(collectionName);
    this.data[collectionName][newId] = item;
    this.synchronize();
    return newId;
  }

  removeItem = (id, collectionName) => {
    if(this.data[collectionName]){
      delete this.data[collectionName][id];
      this.synchronize();
    }
  }

  getCollection = (collectionName) => {
    // gauti visus duomenis iš nurodytos kolekcijos, jei tokios kolekcijos nėra - grąžinti null
    /* Grąžinimo formatas
     [
       {id: ..., data: ...},
       {id: ..., data: ...},
       {id: ..., data: ...},
       {id: ..., data: ...},
       {id: ..., data: ...},
     ]
    */
  }

  getItem = (id, collectionName) => {
    //  Gauti duomenis, id raktu iš nurodytos kolekcijos, jei nerats grąžionti null
    /* Grąžinimo formatas
        {id: ..., data: ...}
    */
  }
}
