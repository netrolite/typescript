type Student = ReturnType<typeof createStudent>;
function createStudent(name: string, age: number, email: string) {
  return { name, age, email };
}
console.log(typeof createStudent);