const tuple: [string, boolean, number] = ["hi", false, 22];

type Id = string | number;

interface Vehicle {
  type: "car" | "boat" | "plane" | "helicopter",
  license: string
}

interface Person {
  name: string,
  hobbies: string[],
  yearBorn: number,
  id: Id,
  vehicles: Vehicle[]
}

const bob: Person = {
  name: "Bob",
  yearBorn: 1997,
  hobbies: ["golf"],
  id: 111,
  vehicles: [
    {
      type: "helicopter",
      license: "1111"
    }
  ]
}

console.log(bob);
