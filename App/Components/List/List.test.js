import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';
import List from './List';

describe('List', () => {
  const data = [
    {id: 1, text: 'item 1'},
    {id: 2, text: 'item 2'},
  ];
  const renderItem = ({item}) => <Text>{item.text}</Text>;
  const contentContainerStyle = {paddingBottom: 20};

  it('renders a list with the given data and renderItem function', () => {
    const {getByText} = render(<List data={data} _renderItem={renderItem} />);

    expect(getByText('item 1')).toBeDefined();
    expect(getByText('item 2')).toBeDefined();
  });

  it('applies the given contentContainerStyle to the list', () => {
    const {getByTestId} = render(
      <List
        data={data}
        _renderItem={renderItem}
        contentContainerStyle={contentContainerStyle}
      />,
    );

    const container = getByTestId('list-container');
    expect(container).toHaveStyle(contentContainerStyle);
  });

  it('applies default paddingBottom style if contentContainerStyle is not provided', () => {
    const {getByTestId} = render(<List data={data} _renderItem={renderItem} />);

    const container = getByTestId('list-container');
    const expectedStyle = {
      paddingBottom: Dimensions.get('window').width * 0.15,
    };
    expect(container).toHaveStyle(expectedStyle);
  });
});
