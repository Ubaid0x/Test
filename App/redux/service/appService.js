import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemonList = createAsyncThunk(
  'list/fetchpokemonList', // a unique identifier for this request
  async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    return response.data;
  },
);
