import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { answers } from './data/answers';
import { pickRandomItems } from '../util';
import { NUMBER_OF_ROUNDS } from '../config';
import { IRootState } from './store';

const answersSelector = (state: IRootState) => state.answers.answers;

const randomAnswersSelector = createSelector(answersSelector, (items) =>
  pickRandomItems(items, NUMBER_OF_ROUNDS),
);

const answersSlice = createSlice({
  name: 'answers',
  initialState: {
    answers: answers,
  },
  reducers: {
    rerollRandomItems: (state) => {
      state.answers = pickRandomItems(answers, NUMBER_OF_ROUNDS);
    },
  },
});

export { answersSlice, randomAnswersSelector };

export const { rerollRandomItems } = answersSlice.actions;
