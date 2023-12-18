// while petlja se koristi za iteraciju kroz neki objekat.
// definise se drugacije nego for petlja.

// vreme = "Suncano";
// while (vreme === "Suncano") {
//   console.log("Danas je lep dan");
//   vreme = "Kisovito";
// }

let i = 1;
while (i < 6) {
  console.log(i);
  //   Kad zavrsimo celu logiku za kod odredjenim uslovom moramo menjati i.
  i++;
}

// do while petlja se koristi za iteraciju kroz neki objekat.
// Razlika u odnosu na while petlju je sto se prvo izvrsava kod pa tek onda provera uslov.

let j = 1;
do {
  console.log(j);
  j++;
} while (j < 6);

// nedostatak:
let z = 10;
do {
  console.log(z);
  z++;
} while (z < 6);

// While
// Traziti od korisnika da unse neki borj.
// Na Osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja.
const br = +prompt("Unesite broj");
let a = 1;
do {
  console.log(a * a);
  a++;
} while (a <= br);

// Traziti unos brojeva brojeva od korisnika sve dok ne unese nulu:
let e = +prompt("Unesite broj");
while (e !== 0) {
  e = +prompt("Unesite broj");
}

// Domaci:
// 1.
// Ispisati sve brojeve od 1 do 10 koji su parni

let b = 2;
while (b <= 10 && b % 2 === 0);
{
  console.log(b);
  b += 2;
}

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.
const g = +prompt("Unesite prvi broj ");
const c = +prompt("Unesite drugi broj ");
while (g < c) {
  for (let i = g; i <= c; i++) {
    console.log(i);
  }
}
