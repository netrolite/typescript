class Coder {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    private address: string,
    protected age: number,
    public langs: string[] = ["JavaScript", "Java"]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.age = age;
    this.langs = langs;
  }

  public getAddress = () => this.address;
  public getAge = () => this.age;
}

class WebDev extends Coder {
  constructor(
    firstName: string,
    lastName: string,
    address: string,
    age: number,
    public computer: string
  ) {
    super(firstName, lastName, address, age);
    this.computer = computer;
  }

  public getLangs = () => this.langs;
}

const rob = new WebDev("rob", "banks", "main st", 11, "Mac mini");
console.log(rob.getLangs());