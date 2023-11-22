naslov = document.getElementById("naslov");
naslov.innerHTML = "Naslov ispisan preko JavaScripta";
naslov.style = "color:red; font-size:42px";

// TIPOVI PODATAKA //

// Da bisomo znali tip promenjljive u JavaScript koristimo typeof operator

// tipove podataka u JavaScriptu se dele u dve grue:
// 1. Primitivni tipovi podataka(vrednosni)
// 2. Neprimitivni tipovi podataka(referentni)

// 1.1. Stringovi - niz karaktera zapisanim pod navodnicima. "" ili '' nije bitno
console.log("Ovo je nas prvi string.");
console.log(typeof "Ovo je nas prvi string.");

// 1.2 number - Predstavlja broj koji moze biti zapisan sa ili bez decimalnog zareza
console.log(25);
console.log(typeof 25);

// 1.3 BigInt - Brojevi koji prelaze granice obicnih brojeva.
console.log(BigInt(3787823617268497820482342709345923));
console.log(typeof BigInt(3787823617268497820482342709345923));
