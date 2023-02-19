class Person {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    private age: number,
    protected hasFridge: boolean = false
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
    public languages: string[] = [],
  ) {
    super(firstName, lastName, age);
    this.languages = languages;
  }
  
  public doSomething(rangeStart: number, rangeEnd: number) {
    return this.getRandomIntInRange(rangeStart, rangeEnd);
  }

  public getLanguages() {
    return `I write code in ${this.getFormattedStringOfLangs()}`;
  }

  public setLanguages(languages: Array<string>) {
    this.languages = languages;
  }

  private getFormattedStringOfLangs() {
    const allLangs = [...this.languages];
    if (allLangs.length === 1) return `${allLangs[0]}`

    const lastLang = allLangs.pop();
    let langsString = allLangs.join(", ");
    return langsString += ` and ${lastLang}`;
  }
}

const person1 = new Person("Rob", "Banks", 2);
// illegal: console.log(person1.age);

const dev1 = new Developer("Bob", "Zanks", 22);
// all properties are derived from superclass to subclass (public, private, protected...)
// private variable derived from parent class:
// illegal: console.log(dev1.age);
// ok using an accessor: dev.getAge()