let magical = true;
let power = 2;
let ranger = { magical: false, power: 10 };

// let magical = wizard.magical;
// let power = wizard.power;
({ magical, power } = ranger);
console.log(magical, power);
