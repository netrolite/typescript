interface Assignment {
  studentId: number,
  title: string,
  description?: string,
  grade: number,
  verified?: boolean
}

function updateAssignment(
  assignment: Assignment,
  propsToUpdate: Partial<Assignment>
) {
  return { ...assignment, ...propsToUpdate }
}

let ass: Assignment = {
  studentId: 10,
  title: "Jump 10 times",
  grade: 100,
}

console.log(ass);
ass = updateAssignment(ass, { description: "Each jump must be at least 1 inch high", verified: true });
console.log(ass);
