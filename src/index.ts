interface Student {
  name: string,
  gpa: number,
  classes?: number[]
}

const student: Student = {
  name: "douglas",
  gpa: 3.3,
  classes: [100, 300]
}

for (const key in student) {
  // "keyof Student" works if we have access to Student interface
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).forEach((key) => {
  // "keyof typeof student" works if we don't have access to Student interface
  console.log(`${key}: ${student[key as keyof typeof student]}`);
})

// "keyof Interface" returns all types of values that the interface contains
// function test(key: keyof Student) === function test(key: string | number | number[] | undefined) 
function logStudentKey(student: Student, key: keyof Student) {
  console.log(student[key]);
}

logStudentKey(student, "classes");
