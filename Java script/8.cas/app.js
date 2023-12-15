// Switch naredbu koristimo kad zelimo preko slucajeva pokriti tacne moguce vrednosti

switch (5 - 3) {
  case 10:
    // kod koji se izvrsava ako je izraz === 10
    break;
  case 2:
    // kod koji se izvrasava ako je izraz === 2
    break;
  case 5:
    // kod koji se izvrasava ako je izraz ===5
    break;
  default:
    // kod okji se zvrasva ako nisu izadovoleni prethodni uslovi
    break;
}

// break zapravo prekida izvrsavanje naredbe.
// break keyword stavljmo na kraju slucaja da se ne bi izvrsio kod od narednog slucaja koji nije namenjen.

const broj = +prompt("Unesite broj od 12 do 15");
switch (broj) {
  case 12:
  case 13:
  case 14:
  case 15:
    console.log("Uneli ste vrednost broj" + broj);
    break;
  default:
    console.log("niste uneli zeljeeni broj");
}
const td = +prompt("Unesite redni broj dana u nedekji");
switch (td) {
  case 1:
    console.log("Danas je Ponedeljak");
    break;
  case 2:
    console.log("Danas je Utorak");
    break;
  case 3:
    console.log("Danas je Sreda");
    break;
  case 4:
    console.log("Danas je Cetvrtak");
    break;
  case 5:
    console.log("Danas je Petak");
    break;
  case 6:
    console.log("Danas je Subota");
    break;
  case 7:
    console.log("Danas je Nedelja");
    break;
  default:
    console.log("Niste uneli odgovarajuci broj");
}
