import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from '@/slices/films.slice';

const store = configureStore({
   reducer: {
      films: filmsReducer,
   },
});

export type TypeDispatch = typeof store.dispatch;
export type TypeRootState = ReturnType<typeof store.getState>;
export default store;
