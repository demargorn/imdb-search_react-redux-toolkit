import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from '../slices/films.slice';

const store = configureStore({
   reducer: {
      films: filmsReducer,
   },
});

export default store;
