import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Home} from './screens';

describe('Home Screen', () => {
  it('renders the Pokemon List heading', () => {
    const {getByText} = render(<Home />);
    expect(getByText('Pokemon List')).not.toBeNull();
  });

  it('fetches and displays a list of Pokemon', () => {
    const pokemonList = {
      results: [{name: 'bulbasaur'}, {name: 'charmander'}, {name: 'squirtle'}],
    };
    const {getByText} = render(<Home />, {
      initialState: {AppSlice: {data: pokemonList}},
    });

    pokemonList.results.forEach(pokemon => {
      expect(getByText(pokemon.name)).not.toBeNull();
    });
  });

  it('navigates to the Details screen when a Pokemon is pressed', () => {
    const mockNavigate = jest.fn();
    const pokemonList = {
      results: [{name: 'bulbasaur'}, {name: 'charmander'}, {name: 'squirtle'}],
    };
    const {getByText} = render(<Home navigation={{navigate: mockNavigate}} />, {
      initialState: {AppSlice: {data: pokemonList}},
    });

    fireEvent.press(getByText('bulbasaur'));
    expect(mockNavigate).toHaveBeenCalledWith('Details', {
      item: {name: 'bulbasaur'},
    });
  });
});
