// addId only accepts an object as its only argument and captures what that object is using T
function addId<T extends object>(obj: T) {
  const id = Math.floor(Math.random() * 1000);
  return { ...obj, id };
}

const obj = { name: "matvey", age: 15 };
const objWithId = addId(obj);
console.log(objWithId);