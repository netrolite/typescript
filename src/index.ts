const name: any = "hello";

const lengthWithAs = (name as string).length;
const lengthWithAngleBrackets = (<string>name).length;
console.log(lengthWithAs);
console.log(lengthWithAngleBrackets);
console.log(lengthWithAs === lengthWithAngleBrackets);
