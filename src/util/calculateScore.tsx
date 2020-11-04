const scoreTable: { [key: number]: number } = {
  0: 1000,
  1: 900,
  2: 800,
  3: 700,
  4: 600,
  5: 500,
  6: 400,
  7: 300,
  8: 200,
  9: 100,
};

export function calculateScore(idx: number) {
  return scoreTable[idx];
}
