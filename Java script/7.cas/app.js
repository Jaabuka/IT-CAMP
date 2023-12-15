// Za interakciju sa korisnikom koristini prompt metodu.

const FullName = prompt("Unesite vase ime i prezime");
console.log(FullName);
const age = +prompt("Unesite broj gofina");
console.log(age);
console.log(typeof age);

// Vrednost dobijena preko prompt metode je uvek string.
// Taj string se moze prevesti u tip number na nekoliko nacina:

// 1. Number(age)
const brojGodina = Number(age);
console.log(brojGodina);
console.log(typeof brojGodina);

// 2. +age
const brojGodina2 = +age;
console.log(brojGodina2);
console.log(typeof brojGodina2);

// const Visina = prompt("Unesite vasu visinu");
const Visina = +prompt("Unesite vasu visinu");
console.log(Visina);

// isNaN() je metoda koja proverava da li je neka vrednost nek (NaN)'
console.log(isNaN("55")); // false;
console.log(isNaN("5eve5")); // true;

// Na osnovu promenljive brojGodina ispisati u konzoli sledece:
// ako je broj godina manji od 12: "Vi ste decijeg doba"
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba.
// ako je broj godina negativan ispisti ...
// ako nisu unete godine ispisati ...

if (age > 0 && age < 12) {
  console.log("Vi ste dete");
} else if (age >= 12 && age < 18) {
  console.log("Vi ste maloletni");
} else if (age >= 18 && age < 40) {
  console.log("Vi ste punoletni");
} else if (age >= 40) {
  console.log("Vi ste zrela osoba");
} else if (age <= 0) {
  console.log("Broj godina mora biti pozitivan");
} else if (isNaN(age)) {
  console.log("Niste uneli broj godina");
}

// Provera broja:
// Napiši program koji će tražiti od korisnika da unese broj, a zatim ispiši poruku koja će reći da li je broj pozitivan, negativan ili nula.

// Ocena studenta:
// Napiši program koji će korisnika pitati za unos ocene (broj između 0 i 100) i ispisati odgovarajuću ocenu (A, B, C, D ili F) prema standardnom školskom sistemu ocenjivanja.

// Provera parnosti broja:
// Napiši program koji će korisnika pitati za unos broja, a zatim ispisati poruku da li je broj paran ili neparan.

// Upoređivanje dva broja:
// Napiši program koji će tražiti od korisnika da unese dva broja, a zatim ispisati poruku koja će reći koji od ta dva broja je veći, ili da su jednaki.

// 1.
const broj = +prompt("Unesite neki broj");
if (isNaN(broj)) {
  console.log("Niste uneli broj");
} else if (broj > 0) {
  console.log("pozitivan");
} else if (broj < 0) {
  console.log("negativan");
} else if (broj === 0) {
  console.log("broj je jednak nuli");
}

// 2.
const ocena = +prompt("Unesite ocenu");
if (isNaN(ocena)) {
  console.log("Niste uneli ocenu");
} else if (ocena < 0) {
  console.log("Upisana jee pogresna ocena");
} else if (ocena > 100) {
  console.log("Unesena je pogresna ocena");
} else if (ocena > 0 && ocena <= 50) {
  console.log("Vasa ocena je F");
} else if (ocena > 50 && ocena <= 70) {
  console.log("Vasa ocena je D");
} else if (ocena > 70 && ocena <= 80) {
  console.log("Vasa ocena je C");
} else if (ocena > 80 && ocena <= 90) {
  console.log("Vasa ocena je B");
} else if (ocena > 90 && ocena <= 100) {
  console.log("Vasa ocena je A");
}

// 3.
const br = +prompt("Unesite broj");
if (isNaN(br)) {
  console.log("Nije unet broj");
} else if (br % 2 === 0) {
  console.log("Broj je paran");
} else if (br % 2 === 1) {
  console.log("Broje je neparan");
}

// 4.
const br1 = +prompt("Unesite prvi broj");
const br2 = +prompt("Unesite drugi broj");
if (isNaN(br1) || isNaN(br2)) {
  console.log("Niste uneli brojeve");
} else if (br1 > br2) {
  console.log("Prvi broje je veci od drugog");
} else if (br2 > br1) {
  console.log("Drugi broj je veci od prvog");
} else if (br1 === br2) {
  console.log("oba broja su jednaka");
}
