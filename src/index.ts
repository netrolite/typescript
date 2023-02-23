interface HasId {
  id: number
}

// can have properties other than id
function processUser<T extends HasId>(user: T) {
  return user;
}

// can only have id property
function processId(id: HasId) {
  return id;
}


// ok
console.log(processUser({ id: 10, name: "matvey" }));

// error
// console.log(processId({ id: 10, name: "matvey" }));

// ok
console.log(processId({ id: 12 }));
