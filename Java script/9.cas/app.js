const demir = "Demir";

for (let i = 1; i < 10; i++) {
  console.log(demir);
}

// Ispisati brojeve od 1 do 10,izuzev 2 i 5;
// 1.
for (let i = 0; i <= 10; i++) {
  if (i != 2 && i != 5) {
    console.log(i);
  }
}

// Continue keyword moristimo da preskocimo ranju za j
// 2.Nacin
for (let i = 0; i <= 10; i++) {
  if (i != 2 && i != 5) {
    console.log(i);
  } else {
    console.log(i);
  }
}

// 2. Ispitati sbe brojrvre od 1 10,ako je neki broj deljiv sa 7 neka se prekine petlja
// break izvrsava prekidanje petlje.Ako zelimo da se u nekom momentu prestane izvrsavanje onda koristimo
for (let i = 0; i <= 10; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}

// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati parne brojeve od 1 do 20 na dva nacina.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.

// 1.
// 1.1
for (let i = 1; i < 21; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
// 1.2
for (let i = 1; i < 21; i += 2) {
  console.log(i);
}
// 2.
// 2.1
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 2.2
for (let i = 2; i < 21; i += 2) {
  console.log(i);
}
// 3.
// 3.1
for (let i = 0; i <= 100; i++) {
  if (i >= 6 && i <= 14) {
    console.log(i * 2);
  }
}
// 3.2
for (let i = 6; i <= 14; i++) {
  console.log(i * 2);
}
// 4.
// 4.1
for (let i = 50; i <= 100; i += 5) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
// 4.2
for (let i = 50; i <= 100; i += 5) {
  console.log(i);
}
