export type Axis = "P/C" | "L/R" | "A/I" | "E/M";
export type AxisLetter = "P" | "C" | "L" | "R" | "A" | "I" | "E" | "M";
export type AnswerValue = 1 | 2 | 3 | 4 | 5;

export type TypeCode =
  | "PLAE"
  | "PLAM"
  | "PLIE"
  | "PLIM"
  | "PRAE"
  | "PRAM"
  | "PRIE"
  | "PRIM"
  | "CLAE"
  | "CLAM"
  | "CLIE"
  | "CLIM"
  | "CRAE"
  | "CRAM"
  | "CRIE"
  | "CRIM";

export type Question = {
  id: number;
  text: string;
  axis: Axis;
  positive: AxisLetter;
};

export type Answers = Record<number, AnswerValue>;

export type DiagnosisScores = Record<AxisLetter, number>;

const axisLetters: Record<Axis, readonly [AxisLetter, AxisLetter]> = {
  "P/C": ["P", "C"],
  "L/R": ["L", "R"],
  "A/I": ["A", "I"],
  "E/M": ["E", "M"]
};

const defaults: Record<Axis, AxisLetter> = {
  "P/C": "C",
  "L/R": "R",
  "A/I": "I",
  "E/M": "M"
};

const initialScores: DiagnosisScores = {
  P: 0,
  C: 0,
  L: 0,
  R: 0,
  A: 0,
  I: 0,
  E: 0,
  M: 0
};

export function getOppositeLetter(axis: Axis, letter: AxisLetter): AxisLetter {
  const [first, second] = axisLetters[axis];
  if (letter === first) return second;
  if (letter === second) return first;
  throw new Error(`Invalid positive letter "${letter}" for axis "${axis}".`);
}

export function calculateScores(
  questions: readonly Question[],
  answers: Partial<Answers>
): DiagnosisScores {
  const scores: DiagnosisScores = { ...initialScores };

  for (const question of questions) {
    const answer = answers[question.id];
    if (!answer) continue;

    const opposite = getOppositeLetter(question.axis, question.positive);

    if (answer === 5) {
      scores[question.positive] += 2;
    } else if (answer === 4) {
      scores[question.positive] += 1;
    } else if (answer === 2) {
      scores[opposite] += 1;
    } else if (answer === 1) {
      scores[opposite] += 2;
    }
  }

  return scores;
}

export function pickLetterForAxis(axis: Axis, scores: DiagnosisScores): AxisLetter {
  const [first, second] = axisLetters[axis];
  const firstScore = scores[first];
  const secondScore = scores[second];

  if (firstScore === secondScore) {
    return defaults[axis];
  }

  return firstScore > secondScore ? first : second;
}

export function diagnose(
  questions: readonly Question[],
  answers: Partial<Answers>
): TypeCode {
  const scores = calculateScores(questions, answers);
  const code = [
    pickLetterForAxis("P/C", scores),
    pickLetterForAxis("L/R", scores),
    pickLetterForAxis("A/I", scores),
    pickLetterForAxis("E/M", scores)
  ].join("");

  return code as TypeCode;
}

export function isAnswerValue(value: unknown): value is AnswerValue {
  return value === 1 || value === 2 || value === 3 || value === 4 || value === 5;
}
