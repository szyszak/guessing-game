import { reducer, incrementScore, resetScore } from './gameStateSlice';
import { AnyAction } from 'redux';

describe('gameState reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual({ score: 0 });
  });

  it('should handle incrementing score', () => {
    const result = reducer(undefined, {
      type: incrementScore.type,
      payload: 1000,
    });

    expect(result).toEqual({ score: 1000 });
  });

  it('should handle resetting score', () => {
    let result;

    result = reducer(undefined, {
      type: incrementScore.type,
      payload: 1000,
    });

    expect(result).toEqual({ score: 1000 });

    result = reducer(undefined, {
      type: resetScore.type,
    });

    expect(result).toEqual({ score: 0 });
  });
});
