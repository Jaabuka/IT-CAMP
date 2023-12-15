// Korisnik unosi dva broja:
// Na osnovu toga koji je borj manji, interakcija se vrsi od njega do veceg broja.
// Ispisuju sembrojvi od manjeg ka vecem.
let a = +prompt("Unesite prvi broj");
let b = +prompt("Unesite drugi broj");
if (isNaN(a) || isNaN(b)) {
  console.log("niste uneli brojeve");
} else if (a < b) {
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
} else if (b < a) {
  for (let i = b; i <= a; i++) {
    console.log(i);
  }
} else if (a === b) {
  console.log("Unseli ste dva jednaka broja");
}

// Preko switch naredbe:
console.log(new Date().getDay());
// getDay - daje vrednost 0 - 6
// switch (new Date().getDate())...
// Na osnovu vrednosti koja nam daje izraz iz switch naredbe,kroz case_ove i eventualno deafault ispisati pruku:
// "Danas je 'radni dan' "
// "Ugodno provedite vikend"
switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Danas je radni dan");
    break;
  //   case 6:
  //   case 0:
  default:
    console.log("Uzivajte u vikendu");
  // break;
}

// Sabrati brojve od 1 do 10 i ispisato taj zbir.
let zbir = 0;
for (let i = 1; i <= 10; i++) {
  zbir += i;
}
console.log(zbir);

// Prebrojati  i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

const n = +prompt("Unesite vrednost");
let brbr = 0;
let zber = 0;
for (let i = 1; i < n; i++) {
  if (i % 5 === 0) {
    zber += i;
    brbr++;
  }
}
console.log(zber);
console.log(brbr);

// Domaci zadaci
// 1.
// Neka se izvrsi interakcija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

let zbir1 = 0;
for (let i = 99; i >= -99; i--) {
  if (i % 4 === 0) {
    console.log(i + 14);
    zbir1 += i;
  }
}
console.log(zbir1);

// 2.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Interakcija se vrsi od 3 do 17.
let brBr = 0;
let arts = 0;
let zbir2 = 0;
for (i = 3; i <= 17; i++) {
  if (i % 3 === 0) {
    zbir2 += i;
    brBr++;
  }
}
arts = zbir2 / brBr;
