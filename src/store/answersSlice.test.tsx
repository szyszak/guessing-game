import { reducer } from './answersSlice';
import { answers } from './data/answers';
import { AnyAction } from 'redux';

describe('answers reducer', () => {
  it('should handle initial state', () => {
    const state = reducer(undefined, {} as AnyAction);

    expect(state).toEqual({ answers });
  });

  it('should reroll random answers', () => {
    const state = reducer(undefined, { type: 'answers/rerollRandomAnswers' } as AnyAction);

    const newState = reducer(state, { type: 'answers/rerollRandomAnswers' } as AnyAction);

    expect(state).not.toEqual(newState);
  });
});
