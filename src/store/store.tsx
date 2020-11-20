import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { gameStateSlice } from './gameStateSlice';

const rootReducer = {
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
