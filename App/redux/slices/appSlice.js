import {createSlice} from '@reduxjs/toolkit';

import {fetchPokemonList, fetchPokemonDetail} from '../service/appService';

const listSlice = createSlice({
  name: 'List',
  initialState: {data: [], details: {}, status: 'idle', error: null},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonList.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPokemonDetail.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details = action.payload;
      })
      .addCase(fetchPokemonDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default listSlice.reducer;
