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
      add: (state, { payload }) => {
         state.all.push(payload);
      },

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

      remove: (state, { payload }) => {
         const { imdbID } = payload;
         state.favorite = state.favorite.filter((s) => s.imdbID !== imdbID);
      },

      loading: (state, { payload }) => {
         return { ...state, loading: payload };
      },

      isError: (state, { payload }) => {
         return { ...state, error: payload };
      },
   },
});

export const { add, favorite, remove, isError, loading } = filmsSlice.actions;
export default filmsSlice.reducer;
