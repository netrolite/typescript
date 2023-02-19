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

  public getAge = () => this.age;
  public setAge(age: number) {
    this.age = age;
  }

  public getHasFridge = () => this.hasFridge;
  public setHasFridge(hasFridge: boolean) {
    this.hasFridge = hasFridge;
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
}

const dev = new Developer("john", "doe", 19, false, []);
