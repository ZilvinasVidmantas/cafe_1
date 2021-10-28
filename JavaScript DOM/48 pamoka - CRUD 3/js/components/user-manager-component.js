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

  5. NEPRIVALOMAS
    Suderinkite šio komponento htmlElement struktūrą ir klases taip, jog ant mažų ekranų komponentai (table ir form) būtų vienas po kitu
*/
