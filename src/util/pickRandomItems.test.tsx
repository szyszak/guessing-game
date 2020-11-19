import { pickRandomItems } from './pickRandomItems';

describe('pickRandomItems', () => {
  it('should return an array', () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

    const result = pickRandomItems(arr, 4);

    expect(result).toBeArray();
  });

  it('should return correct number of items', () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

    const result = pickRandomItems(arr, 4);

    expect(result).toHaveLength(4);
  });

  it('should not contain duplicate values', () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

    const result = pickRandomItems(arr, 4);

    const unique = [...new Set(result)];

    expect(result).toEqual(unique);
  });
});
