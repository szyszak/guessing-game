import { calculateScore } from './calculateScore';

describe('calculateScore', () => {
  it('should return a number', () => {
    const result = calculateScore(2);

    expect(result).toBeNumber();
  });

  it('should return correct score', () => {
    const result = calculateScore(4);

    expect(result).toEqual(600);
  });
});
