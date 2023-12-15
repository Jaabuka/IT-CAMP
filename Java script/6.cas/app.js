// KONDICIONAL //
// 3 > 4 je uslov koji kada je zadovoljen izvrsice se deo izmedju viticastih zagrada
if (3 > 4) {
  console.log("desava se");
}

trenutno_vreme = 20;

if (trenutno_vreme >= 6 && trenutno_vreme < 12) {
  console.log("Dobro jutro");
} else if (trenutno_vreme >= 12 && trenutno_vreme < 17) {
  console.log("Dobar dan");
} else {
  console.log("Dobro vece");
}

// 1. Ako je broj godina >= od 18,neka se ispise poruka "punoletni ste"
// inace neka se ispise poruka "maloletni ste"

const brojGodina = 17;
if (brojGodina >= 18) {
  console.log("punoletni ste");
} else if (brojGodina < 18) {
  console.log("maloletni ste");
}

// 2. Na Osnovu dve promenljive x i y napisati program koji izracuanva i stampa kolicnik x/y,
// ako je broj y razlicit od nule, a inace ispisuje poruku:Deljenje je nemoguce

const x = 12;
const y = 6;

if (y === 0) {
  console.log("Deljenje je nemoguce ");
} else {
  console.log(x / y);
}

// Domaci:
// Na osnovu promenljive brojGodina ispisati u konzoli sledece:
// ako je broj godina manji od 12: "Vi ste decijeg doba"
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba.

// const brojGodina = 27;

if (brojGodina < 12) {
  console.log("Vi ste dete");
} else if (brojGodina >= 12 && brojGodina < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina >= 18 && brojGodina < 40) {
  console.log("Vi ste punoletni");
} else {
  console.log("Vi ste zrela osoba");
}
