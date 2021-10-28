class UserManagerComponent {
  constructor(props) {
    this.props = props;
    this.intialize();
  }

  /**
 * Atlieka pradinius veiksmus ir
 * atvaizduoja komponento dalis kurios NEpriklauso nuo besikeičiančių duomenų
 */
  intialize = () => {
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row g-3 flex-lg-row-reverse'
    this.htmlElement.innerHTML = `
    <div class="col-12 col-lg-3">
      <form class="shadow p-3">
        <h2>Sukurti vartotoją</h2>
        <div class="mb-3">
          <label for="form1-username" class="form-label">Vartotojas</label>
          <input type="text" class="form-control" id="form1-username" name="username">
        </div>
        <div class="mb-3">
          <label for="form1-email" class="form-label">El. paštas</label>
          <input type="email" class="form-control" id="form1-email" name="email">
        </div>
        <div class="mb-3">
          <label for="form1-imgSrc" class="form-label">Nuotraukos nuoroda</label>
          <input type="text" class="form-control" id="form1-imgSrc" name="imgSrc">
        </div>
        <div class="text-center">
          <button class="btn btn-success">Išsaugoti duomenis</button>
        </div>
      </form>
    </div>

    <div class="col-12 col-lg-9">
      <table class="table table-striped">
        <thead class="bg-dark text-white">
          <tr>
            <th>Nuotrauka</th>
            <th>Vartotojas</th>
            <th>Paštas</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="https://static.wikia.nocookie.net/seraphina/images/b/b2/Dragonseraphina.jpg" class="table__row-img"></td>
            <td>Dragon99</td>
            <td>flame@burst.com</td>
            <td>
              <button class="btn btn-danger">✕</button>
              <button class="btn btn-warning">⟳</button>
            </td>
          </tr>
          <tr>
            <td><img src="https://cdn.gamer-network.net/2018/metabomb/treantdruiddecklistguidehearthstone.jpg" class="table__row-img"></td>
            <td>Tree</td>
            <td>palm@forest.com</td>
            <td>
              <button class="btn btn-danger">✕</button>
              <button class="btn btn-warning">⟳</button>
            </td>
          </tr>
          <tr>
            <td><img
                src="https://static.wikia.nocookie.net/mightandmagic/images/5/5b/Sprite_render.jpg/revision/latest/scale-to-width-down/250?cb=20200806142643&amp;path-prefix=en"
                class="table__row-img"></td>
            <td>Butterfly</td>
            <td>wings@fly.com</td>
            <td>
              <button class="btn btn-danger">✕</button>
              <button class="btn btn-warning">⟳</button>
            </td>
          </tr>
          <tr>
            <td><img src="https://slm-assets.secondlife.com/assets/13686960/lightbox/minotaur.jpg" class="table__row-img"></td>
            <td>Tourus</td>
            <td>horns@dungeon.com</td>
            <td>
              <button class="btn btn-danger">✕</button>
              <button class="btn btn-warning">⟳</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>`;
    // tam kad nedingtų komponentų event-listener'iai jų turinį prijungti prie šio komponeneto elementų naudojant metodą append arba appendChild
    // prijungus komponentų turinį su innerHTML, komponentų turinys pus paverčiamas string'u (tam kad prijungti) ir dings event-listener'ių funkcinalumas
  }

  /**
   * Atvaizduoja komponento dalis kurios priklauso nuo besikeičiančių duomenų
   */
  render = () => {

  }
}
/*
  1. initialize metode sukurti hard-code html skeletą, 
    - tam padaryti panaudokite duomenis nukopijuotus iš HTML puslapio
    - naudodami boosttrap klases išdėstykite tą turinį, jog jums atrodytų tvarkinga

  2. Perduokite šiam komponentui duomenis, reikalingus sukurti lentelei ir formai (props)
    
  3. Panaudodami [2.] duomenis sukurkite lentelės ir formos komponentus, initialize metode
    - this.table - lentelės komponentas 
    - this.form - formos komponentas

  4. Panaudokite [3.] sukurtus komponenetus, jog atvaizdavimas būtų sukurtas naudojant šių komponentų htmlElement savybes
*/
