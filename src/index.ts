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

type Grade = "A" | "B" | "C" | "D" | "F";
type UnsatisfactoryGrade = Extract<Grade, "F">;
type SatisfactoryGrade = Exclude<Grade, "F">;
type HighGrade = Extract<Grade, "A" | "B">;

type Student = "John" | null | "Dave" | undefined;
type StudentNoNullOrUndefiend = NonNullable<Student>;