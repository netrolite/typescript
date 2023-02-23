interface Assignment {
  title: string,
  details?: string,
  studentId: number,
  maxScore: number,
  passingScore: number,
  score?: number
}

type AssignmentAllPropsRequired = Required<Assignment>;
type AssignmentPreview = Omit<Assignment, "maxScore" | "passingScore">;
// type AssignmentResults = Pick<AssignmentAllPropsRequired, "title" | "passingScore" | "score">;
type AssignmentResults = Required<Pick<Assignment, "title" | "passingScore" | "score">>;

const asgmt1: Assignment = {
  title: "write an article on child labor",
  studentId: 120,
  maxScore: 10,
  passingScore: 3  
}

const results: AssignmentResults = {
  title: "Your article on child labor",
  passingScore: 3,
  score: 2
}