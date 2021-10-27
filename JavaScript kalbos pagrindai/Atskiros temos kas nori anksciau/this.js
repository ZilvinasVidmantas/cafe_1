'use strict';
/*
        Lamda išraiškos <this> kontekstas yra jos kūrėjas
        Funkcijos <this> kontekstas yra jos iškvietėjas (jeigu nebuvo taikyti funkcijos metodai bind, call arba apply)
*/
// 'this' raktažodis nusako, kas yra funkcijos vykdymo kontekstas
// console.dir(this);
// 'this' funkcijos viduje yra kontekstas, kurį naudojant buvo iškviesta funkcija
// 'this' - tai funkcijos iškvietėjas

// Funkcija spausdina 'students' kintamajį, pagal kontekstą iš kurio buvo iškviesta
let printStudents = function () {
  console.log(this);
  console.log(this.students);
}
// Norint funkcijai pririšti objektą, kuris bus pasiekiamas raktažodžiu 'this' VISAM LAIKUI NEGRĮŽTAMAI, galime naudoti 
// funkcijos metodą 'bind(objektasKurisBusThisFunkcijosIškvietimoMetu)'.
{
  // PVZ.:
  // Pririšamas obejktas, kuris funkcijos iškvietimo metu bus 'this'
  // printStudents = printStudents.bind(window); 
  // printStudents = printStudents.bind({
  //   students: [7, 8]
  // }); 
}

// Sukuriame prototipus, kurie turi savybę students
class Faculty {
  constructor(students) {
    this.students = students;
    this.printStudents = printStudents;
  }
}

class University {
  constructor(students) {
    this.students = students;
    this.printStudents = printStudents;
  }
}

// 'window' aplinkoje sukurtas 'students' kintamasis
window.students = ['Serbentautas', 'Komadauskas', 'Agregatas'];
const ktu = new University(['Jovalas', 'Dagnė', 'Jaukalas']);
const su = new University(['Bemvas', 'Audinė']);
const apzeldinimoFak = new Faculty(['Pinavija', 'Dagilis']);

// window.printStudents
printStudents.call(ktu); // naudojant funkcijos metodą call, pasakome kas KVIETINIO metu, bus this
ktu.printStudents(); // this -> <ktu> kintamuosu pasiekiama atmintis
su.printStudents(); // this -> <su> kintamuosu pasiekiama atmintis
apzeldinimoFak.printStudents(); // this -> <apzeldinimoFak> kintamuosu pasiekiama atmintis
