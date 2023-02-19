class Person {
  private static count = 0;
  public id: number;

  constructor(public name: string) {
    Person.count += 1;
    this.id = Person.count;
    this.name = name;
  }

  static getCount() {
    return Person.count;
  }
}

const person1 = new Person("matvey");
const person2 = new Person("bob");
const person3 = new Person("rob");
console.log(person3);

for (let i = 0; i < 1000; i++) {
  const person = new Person("Bill");
}

console.log(Person.getCount());
