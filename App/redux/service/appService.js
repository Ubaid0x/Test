import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemonList = createAsyncThunk(
  'list/fetchPokemonList', // a unique identifier for this request
  async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    return response.data;
  },
);

export const fetchPokemonDetail = createAsyncThunk(
  'list/fetchPokemonDetail', // a unique identifier for this request
  async url => {
    const response = await axios.get(url);
    return response.data;
  },
);
