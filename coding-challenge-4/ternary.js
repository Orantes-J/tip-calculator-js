const bill = 430;

const tipPercent = bill >= 50 && bill <=300 ? 0.15:0.20;

const tipAmount = bill * tipPercent;

const totalAmount = bill + tipAmount;

console.log(`The bill was ${bill}, the tip was ${tipAmount}, and the total value is ${totalAmount}`)