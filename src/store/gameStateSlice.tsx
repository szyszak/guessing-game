import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from './store';

const scoreSelector = (state: IRootState) => state.gameState.score;

const gameStateSlice = createSlice({
  name: 'gameState',
  initialState: {
    score: 0,
  },
  reducers: {
    incrementScore: (state, { payload }: PayloadAction<number>) => {
      state.score += payload;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export { gameStateSlice, scoreSelector };

export const { incrementScore, resetScore } = gameStateSlice.actions;
