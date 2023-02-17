interface Vehicle {
  type: "car" | "boat" | "plane",
  getType?: Function,
  license?: {
    madeAt: Date,
    expiresAt: Date,
    getLicense?: Function
  }
}

interface Person {
  name?: string | number,
  vehicles: Vehicle[]
}

const bobsCar: Vehicle = {
  type: "plane",
  getType() {
    return this.type;
  },
  license: {
    getLicense() {
      return this.expiresAt;
    },
    madeAt: new Date("Feb 19, 1992"),
    expiresAt: new Date("Feb 18, 1992")
  }
}

const bob: Person = {
  name: "",
  vehicles: [bobsCar]
}

const expiresAt = bob.vehicles[0]?.license?.getLicense?.() ?? "unknown";
const type = bob.vehicles[0]?.getType?.() ?? "type is not defined";
console.log(expiresAt);
console.log(type);
