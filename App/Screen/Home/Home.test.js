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

});
