// function ecrireUnMot() {
//   // instruction
//   console.log("un mot");
// }

// ecrireUnMot(); // 'un mot'

// function nombreEstPair(nbr) {
//   const ispair = nbr % 2 === 0 ? "pair" : "impair";
//   const str = `Le nombre ${nbr} est ${ispair}`;
//   console.log(str);
// }

// fonction fléchée
// const nombreEstPair = (nbr) => {
//   const ispair = nbr % 2 === 0 ? "pair" : "impair";
//   const str = `Le nombre ${nbr} est ${ispair}`;
//   console.log(str);
// };

// const function = nombreEstPair(nbr) {
//   const ispair = nbr % 2 === 0 ? "pair" : "impair";
//   const str = `Le nombre ${nbr} est ${ispair}`;
//   console.log(str);
// }

// nombreEstPair(44);
// nombreEstPair(3);

// const addition = (a, b) => console.log(a + b);

// function test(nbr1, nbr2) {
//   if (nbr1 > 10) {
//     addition(nbr1, nbr2); // appel fonction
//   }
// }

// test(11, 10);

// const test = () => console.log("Vous êtes majeur.");
// const test2 = () => console.log("Vous êtes majeur.");

function isAdulte(age, cb) {
  if (age > 18) {
    console.log("majeur");
  }
  cb();
}

isAdulte(19, () => console.log("coucou"));
isAdulte(19, function () {
  console.log("coucou");
});
