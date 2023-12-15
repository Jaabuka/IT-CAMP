// Ispisati brojeve od 1 do 10 u konzoli jedan ispod drugog

// 1.Nacin
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// 2.Nacin

// Za interakciju kroz neki objekat(niz,karaktere string...) u JavaScriptu koristimo petlju.
// Postoje tri petlje u JS

for (statement1; statement2; statemand3) {
  // kod koji se izvrava u svakoj iterakciji
}
// statement1 - Izvrsava se samo jedno na pocetku i predstavlja deklaraciju iteratora
// statement2 - Granicu do koje ce se petlja izvrsavati
// statement3 - Predtavlja promenu vrednosti iteratora posle svake iteracije
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

// 2. Zadatak - switch naredba
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.

// 3. Sezona godine:
// Napiši program koji će korisnika pitati za unos meseca (broj između 1 i 12) i ispisati odgovarajuću sezonu godine.

// 4. Kalkulator operacija:
// Napiši program koji će tražiti od korisnika da unese dva broja i operaciju (‘+’, ‘-’, ‘*’, ‘/’), a zatim ispisati rezultat te operacije.

// RAD:

// 1.
const a = +prompt("Unsesite prvu stranicu");
const b = +prompt("Unsesite drgu stranicu");
if (isNaN(a) || isNaN(b)) {
  console.log("Niste uneli stranice");
} else if (a === b) {
  console.log("Povrsina kvadrada", a * b);
} else {
  console.log("Povrsina pravougainka je", a * b);
}

// 2.
const x = +prompt("Unesite prvi realni borj");
const y = +prompt("Unesite drugi realni borj");
switch ((x, y)) {
  case y != 0:
    console.log(x / y);
    break;
  default:
    console.log("Deljenje nije moguce");
}

// 3.
const msc = +prompt("Unesite redni broj mesec");
switch (msc) {
  case 1:
  case 2:
    console.log("Trenutno je zima");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Trenutno je prolece");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Trenutno je leto");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Trenutno je leto");
    break;
  case 12:
    console.log("Trenutno je zima");
    break;
}

// 4.
const c = +prompt("Unesite prvi broj");
const d = +prompt("Unesite drugi broj");
const operacija = prompt("Unesite operciju");
switch (operacija) {
  case "+":
    console.log(c + d);
    break;
  case "-":
    console.log(c - d);
    break;
  case "*":
    console.log(c * d);
    break;
  case "/":
    console.log(c / d);
    break;
}
