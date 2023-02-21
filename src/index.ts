interface Person {
  firstName: string,
  lastName: string
}

// generics allow for adding properties not specified in "Person" interface (the ones specified are still required)
// e.g it's possible to add property "age" to "person" argument
function addFullName<T extends Person>(person: T) {
  const { firstName, lastName } = person;
  const fullName = makeFullName(firstName, lastName);
  return { ...person, fullName };
}

const person = addFullName({ firstName: "bob", lastName: "banks", age: "15" });
console.log(person);

function makeFullName(firstName: string, lastName: string) {
  firstName = firstName.trim();
  lastName = lastName.trim();
  return `${firstName} ${lastName}`;
}