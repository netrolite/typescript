"use strict";
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["F"] = 4] = "F";
})(Grade || (Grade = {}));
function greet(name) {
    return `Hello, ${name}`;
}
console.log(Grade);
console.log(greet("matvey"));
