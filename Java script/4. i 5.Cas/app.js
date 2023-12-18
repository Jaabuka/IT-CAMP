// Promenljive definisane preko var keyword mozemo ponovo deklarisati (izvrsiti redeklarizaciju),
//  kao i reinicijalizaciju (novo deljivanje vrednosti).

var x = 10;
console.log(x);

x = 14;
console.log(x);

var x = 15;
console.log(x);

// let i const nam obezbedjuju Black Scope.

// Promenljive definisane preko let keyword mozemo ponovo deklarisati (izvrsiti redeklarizaciju) ako se radi u
//  drugom prostoru,dok reinicijalizaciju (novo deljivanje vrednosti) mozemo izvrisiti i u istom prostoru.

let y = 3;
console.log(y);

y = 6;
console.log(y);
// y = 50; nije dozvoleno redeklarisanje u istom prostoru

{
  // console.log(y); y se prepoznaje iz global scope
  let y = 20;
  console.log(y);
}
console.log(y);

// Promenljive definisane preko const keyword mozemo ponovo deklarisati (izvrsiti redeklarizaciju) ako se radi u
//  drugom prostoru,dok reinicijalizaciju (novo deljivanje vrednosti) mozemo izvrisiti i u istom prostoru.

const z = 30;
// const z =45; nije dzvoljena u istom porstory
// const z =60; nije dzvoljena u istom porstory
{
  // console.log(z) se prepoznaje iz global skop
  const z = 20;
  console.log(z);
}
