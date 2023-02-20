class Person {
  private static _count = 0;

  constructor(
    private _name: string,
    private _age: number,
    private _address: string,
    private _dateOfBirth: Date
  ) {
    Person.incrementCount();
  }

  static get count() { return Person._count }
  static incrementCount() { Person._count += 1 }

  get name() { return this._name }
  set name(name: string) {
    this._name = name;
  }

  get age() { return this._age }
  set age(age: number) {
    this._age = age;
  }

  get address() { return this._address }
  set address(address: string) {
    this._address = address;
  }

  get dateOfBirth() { return this._dateOfBirth }
  set dateOfBirth(dateOfBirth: Date) {
    this.dateOfBirth = dateOfBirth;
  }
}

class Developer extends Person {
  constructor(
    _name: string,
    _age: number,
    _address: string,
    _dateOfBirth: Date,
    private _languages: string[] = []
  ) {
    super(_name, _age, _address, _dateOfBirth);
  }

  get languages() { return this._languages }
  set languages(languages: string[]) {
    this._languages = languages;
  }
}

const dev1 = new Developer("bob", 18, "main st", new Date());
const dev2 = new Developer("bob", 18, "main st", new Date());
const dev3 = new Developer("bob", 18, "main st", new Date());
console.log(dev1);
console.log(dev1.address);
console.log(Person.count);