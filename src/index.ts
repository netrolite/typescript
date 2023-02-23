interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
  description?: string
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })


// Required and Readonly 

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc. 
  return assign
}

// have to specify that the type is Required<Assignment>. If I don't, it would throw an error
// saying that properties "verified" and "description" are possibly undefined and thus are not
// assignable to type Required<Assignment>, where all properties are required.
const assignVerified: Required<Assignment> = {
  ...assignGraded,
  verified: true,
  description: "sample desc"
};

recordAssignment(assignVerified);