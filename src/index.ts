class Person {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    private age: number,
    protected hasFridge: boolean
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hasFridge = hasFridge;
  }

  public getAge() {
    return this.age;
  }

  public incrementAge() {
    this.age += 1;
  }


  public getHasFridge() {
    return this.hasFridge;
  }

  public setHasFridge(hasFridge: boolean) {
    this.hasFridge = hasFridge;
  }

  protected getRandomIntInRange(rangeStart: number, rangeEnd: number) {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
  }
}

class Developer extends Person {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    hasFridge: boolean = true,
    public languages: string[] = [],
  ) {
    super(firstName, lastName, age, hasFridge);
    this.languages = languages;
  }

  public doSomething(rangeStart: number, rangeEnd: number) {
    return this.getRandomIntInRange(rangeStart, rangeEnd);
  }
}

const dev = new Developer("john", "doe", 19, false, []);

for (let i = 0; i < 20; i++) {
  console.log(dev.doSomething(0, 5));
}