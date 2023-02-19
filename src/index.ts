interface Person {
  name: string,
  job: string
}

interface Animal {
  name: string
}

// compiler doens't care!!!
const bob = {
  name: "Bob",
  job: "web developer"
} as Animal;

// doesn't care either!
const rob: Animal = {

} as Animal;

/*
  // error: property "job" is missing in type "Animal" but is required in type "Person"
  const mary: Person = {

  } as Animal;
*/

// no errors
const john: Person = {
  name: "John"
} as Person

console.log(bob);
