const CURRENCIES = new Map();
const us = { name: "United States of America" };
const ru = { name: "Russian Federation" };
const ind = { name: "India" };
CURRENCIES.set(us, "USD");
CURRENCIES.set(ru, "Ruble");
CURRENCIES.set(ind, "Rupee");

CURRENCIES.forEach((val, key) => {
  key = JSON.stringify(key);
  console.log(`${key}: ${val}`)
});