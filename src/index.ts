class Person {
  secondLang!: string;

  // private can only be accessed from this class
  // protected can be accessed from derived (extended) classes
  constructor(
    private readonly name: string,
    private musicPref: string,
    private age: number,
    private lang: string = "Typescript"
  ) {
    this.name = name;
    this.musicPref = musicPref;
    this.age = age;
    this.lang = lang;
  }

  public getName = () => this.name;

  public getMusicPref = () => this.musicPref;
  public setMusicPref = (musicPref: string) => this.musicPref = musicPref;

  public getAge = () => this.age;
  public setAge = (age: number) => this.age = age

  public getLang = () => this.lang;

  public setLang(lang: string) {
    this.lang = lang;
  }

  public greet() {
    console.log(this.getGreetMsg(this.name));
  }

  private getGreetMsg(name: string) {
    return `Hello, my name is ${name}`
  }
}

const bob = new Person("Bob", "jazz", 16, "Australian english");
bob.getAge()
