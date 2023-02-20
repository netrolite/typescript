interface Transaction {
  [key: string]: number
}

const todaysTransactions: Transaction = {
  "Pizza": -50,
  "Books": -5,
  "Job": 500
}

const hi: string = "hello";
const prop = "Books";
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions[prop]);
console.log(getTotalNet(todaysTransactions));

function getTotalNet(transactions: Transaction) {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
}