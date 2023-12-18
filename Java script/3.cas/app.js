// Postoji nekoliko nacina za prikazivanje podataka u JavaScriptu:
// 1. innerHTML

paragraph = document.getElementById("paragraph");
paragraph.innerHTML = "Ovo je paragraf";

// 2. document.write() - koristi se samo za testiranje.

// 3. alert()

alert("Kiki Milasine");

// 4. console.log()

console.log(paragraph.innerHTML);
console.log(typeof paragraph);

// JavaScript name mora da pocinje sa:

// 1. Slovom(velikim ili malim) (A-Z ili a-z)
// 2. $ (dolar znakom)
// 3. _ (donjom crtom)

// Promenljive od vise reci:

// nas brat="Demir" Nije ispravan primer
// nas_brat="Demir"
// NasBrat="Demir" lover camel case
NasBrat = "Demir"; // upper camel case

// Napomena. U nazivu promenljive se moze naci broj, ali ona nesme pocinjati brojem.

amir = "Amir je odlican ucenik duge godine srednje skole";
Amir = "Amir je dovoljan ucenik duge godine srednje skole";

// JavaScript je case sensitive!!! (Razllikuje veliak i mala slova)

console.log(Amir);

// Postoje 4 nacina da deklarisemo promenjivu u JavaScriptu:

// 1. Koriscenjem var keyword (rezervisane reci) - prevenstveno koriscen na ranijim browesrima

// var projatnon= "Prijatno!"; primer istovremenog deklarisanja i inicijalizovanja promenljive
var prijatno; // deklarisanje promenljive

console.log(prijatno); // undefined
console.log(typeof prijatno); // undefined

prijatno = "Prijatno"; // inicijalizacija deklarisane promenljive prijatno

// 2. Koriscenjem let keyword(rezervisane reci) - koristimo kad je vrednost promenljive(variable) sklono menjanju.

// let brojGodina = 25;  primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu let.

let brojGodina; // deklarisanje promenljive
brojGodina = 25; // inicijalizacija deklarisane promenljive brojGodina

// 3. Koriscenjem const keyowrd (rezervisane reci) - koristimo za verdnisti koje se ne menjaju.

// const ime = "Dzenan"; primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu const.
// Koriscenje cont keyword nije dozvoljeno inicijalizpvane, vec mora uz deklaraciju zajedno
// const ime;
// ime = "Dzenan";

// Koriscenje niceg,

mervan = "Mervan";

// Napomena
// Promenljive (variable) su kontejneri za skladistenje vrednosti.
