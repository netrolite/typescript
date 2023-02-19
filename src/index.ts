interface ICar {
  make: string,
  isConvertible: boolean,
  horsepower: number,
  license: License
  drive(speedMph: number): string
}

interface License {
  registeredAt: Date,
  expiresAt: Date
}

class Car implements ICar {
  make: string;
  isConvertible: boolean;
  horsepower: number;
  license: {
    registeredAt: Date,
    expiresAt: Date
  }

  constructor(
    make: string,
    isConvertible: boolean,
    horsepower: number,
    license: {
      registeredAt: Date,
      expiresAt: Date
    }
  ) {
    this.make = make;
    this.isConvertible = isConvertible;
    this.horsepower = horsepower;
    this.license = license;
  }

  drive(speedMph: number): string {
    if (speedMph > 60) return "Too fast! Not complying with request."
    return `Driving at ${speedMph}MPH.`
  }
}

const now = new Date();
const oneYearInMillisec = 1000 * 60 * 1440 * 365;
const oneYearFromNow = new Date(now.getTime() + oneYearInMillisec);

const license: License = {
  registeredAt: now,
  expiresAt: oneYearFromNow
}
const car = new Car("BMW", false, 200, license);

console.log(car);
console.log(car.drive(61))
