function pluck<Data, Key extends keyof Data>(data: Data, key: Key) {
  return data[key];
}

const obj = { firstName: "bob", lastName: "robs" };
console.log(pluck(obj, "firstName"));
console.log(pluck(obj, "lastName"));