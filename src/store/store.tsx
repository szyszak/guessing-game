import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { answersSlice } from './answersSlice';
import { gameStateSlice } from './gameStateSlice';

const rootReducer = {
  answers: answersSlice.reducer,
  gameState: gameStateSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;
