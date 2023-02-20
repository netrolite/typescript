// Pizza, Books, Job are required, but it's possible to add more "[string]: number" key-value pairs
interface Transaction {
  [key: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

type SignatureValues = string | number | boolean | Date;
// isConvertible, horsepower, registeredAt are required, and adding other values is forbidden
// only useful if the object needs to be looped over using a for in loop
// if it doesn't, can just remove the index signature entirely and get the same exact behavior
interface Car {
  readonly [key: string]: SignatureValues;
  isConvertible: boolean;
  horsepower: number;
  regisetredAt: Date;
}

// legs and isAlive are required, but it's possible to add more key-value pairs where key is a string and value is one of the types in SignatureValues
interface Horse {
  [key: string]: SignatureValues;
  legs: number;
  isAlive: boolean;
}

interface Test {
  key1: number;
  key2: string;
  key3: number;
}

const todaysTransactions: Transaction = {
  Pizza: -50,
  Books: -5,
  Job: 500
}

const test: Test = {
  key1: 2,
  key2: "hi",
  key3: 4
}

const horse: Horse = {
  legs: 4,
  isAlive: true
}

// ok
for (const key in horse) {
  console.log(horse[key]);
}

// expression of type "string" can't be used to index type "Test"
// no index signature with a parameter type "string" was found on type "Test"
/*
  for (const key in test) {
    console.log(test[key]);
  }
*/