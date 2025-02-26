import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   all: [],
   favorite: [],
   error: false,
   loading: false,
};

const filmsSlice = createSlice({
   name: 'films',
   initialState,
   reducers: {
      // загрузить данные
      add: (state, { payload }) => {
         state.all.push(payload);
      },
      // добавить в избранное
      favorite: (state, { payload }) => {
         const { imdbID } = payload;
         const existing = state.favorite.find((s) => s.imdbID === imdbID);

         if (existing) {
            alert('Film is just in favorite');
            return;
         }

         state.favorite.push(payload);
         alert('Film added succesfully');
      },
      // удалить из избранного
      remove: (state, { payload }) => {
         const { imdbID } = payload;
         state.favorite = state.favorite.filter((s) => s.imdbID !== imdbID);
      },
      // индикатор загрузки
      loading: (state, { payload }) => {
         return { ...state, loading: payload };
      },
      // индикатор ошибки
      isError: (state, { payload }) => {
         return { ...state, error: payload };
      },
      // очистка хранилища
      clear: (state) => {
         state.all = [];
      },
   },
});

export const { add, favorite, remove, isError, loading, clear } = filmsSlice.actions;
export default filmsSlice.reducer;
