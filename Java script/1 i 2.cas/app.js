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

// 1.2. number - Predstavlja broj koji moze biti zapisan sa ili bez decimalnog zareza
console.log(25);
console.log(typeof 25);

// 1.3. BigInt - Brojevi koji prelaze granice obicnih brojeva.
console.log(BigInt(3787823617268497820482342709345923));
console.log(typeof BigInt(3787823617268497820482342709345923));

// 1.4. Bollean - clogicki intitet koji ima dve vrednosti true i false.
console.log(true);
console.log(typeof true);

// 1.5. underfind - Promenljiva koja je definisana,ali joj nije dodeljena vrednost,ima vrednost undefined i top takodje undefind

var a = 5;
console.log(a);
console.log(typeof a);

// 1.6. null - Predstavlja nekorrktnu vrednost ili vrednost koja (za sada) ne postoji.

var a = null;
console.log(a);
console.log(typeof a);

// 1.7. Symbol - Tip podataka za skladistenje anonimnih i unikatnih vrednosti.

b = Symbol("Denir");
console.log(b);
console.log(typeof b);

// Primitivni tipovi podataka mogu skladistiti samo jednu vrednost.

// 2.  Neprimitivni tipovi podataka (referentni)

// Za skladistenje vise vrednosti ili kompletnih vrednosti se koriste neprimitivni tipovi podataka.
// Svka promenljiva koja nije primitivnog tipa je tipa Object u JavaScriptu.
// Objekti se koriste za skladistenje neke kolekcije podataka.

// 2.1. Arraz (Niz) - predstavlja strukturu podataka za skladistenje vise vrednosti.
// Elementi niza ne moraju biti istog tipa.

niz = ["Demir", 18, true];
console.log(niz);
console.log(typeof niz);

// 2.2. Object (objekat) - predstavlja strukturu za skladistenje vise vrednosti.Objekti se zapisuju u key:value (name:value) parovima.

obj = {
  ime: "Demir",
  brijGodina: "18",
  punoletan: true,
};
console.log(obj);
console.log(typeof obj);

// 2.3. Set - predstavlja strukturu za skladistenje vise vrednosti.Duplikati nisu dozvoljeni.

set = new Set(["Kanita", 18, true, "Kanita"]); // druga Kanita se nevidi
console.log(set);
console.log(typeof set);

// 2.4. Map - predstavlja strukturu za skladistenje vise vrednosti.Slicni su objektima.

map = new Map([
  ["Ime", "Kanita"],
  ["brojGodina", 19],
  ["piunoletnost", true],
]);
console.log(map);
console.log(typeof map);
