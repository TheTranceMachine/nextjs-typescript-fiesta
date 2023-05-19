import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '@/slice';

export const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
