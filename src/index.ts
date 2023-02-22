function isObject(arg: unknown) {
  return (
    typeof arg === "object" &&
    !Array.isArray(arg) &&
    arg !== null
  )
}

interface BoolCheck<T> {
  data: T,
  is: boolean
}

// "<T extends Record<string, unknown>" only allows to pass "arg" as an object with its keys being of type string
// On the other hand, using "<T extends {}>" allows to pass argument of any type, such as string or a boolean
// that is because in TypeScript, primitive types are derivatives of object type 
function isTrue<T extends Record<string, unknown>>(arg: T): { data: T, is: boolean } {
  if (isObject(arg)) {
    const length = Object.keys(arg).length;
    return { data: arg, is: !!length };
  }
  if (Array.isArray(arg)) {
    return { data: arg, is: !!arg.length };
  }
  return { data: arg, is: !!arg };
}


interface Animal {
  name: string,
  age: number
}

interface Cat extends Animal {
  color: string
}

function logAnimalProp(prop: keyof Animal) {
  console.log(prop);
}

const cat: Cat = {
  color: "brown",
  name: "Bowser",
  age: 1
}

// if you only pass "cat.name", TypeScript is not going to be able to infer that it's a key of type Animal. This is because the compiler only looks at the type of "cat.name", which is a string.
logAnimalProp(cat.name as keyof Animal);

