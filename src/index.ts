type One = string;
type Two = "you";
type Three = "hello";

// typescript knows about the type but doesn't perform any checks
// so the following does not throw any errors:
const a: One = "hi";
const b = a as Two;
const c = <Three>a;