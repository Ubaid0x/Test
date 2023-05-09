import React from 'react';
import {render} from '@testing-library/react-native';
import Heading from './Heading';

describe('Heading', () => {
  const title = 'Test Heading';
  const customStyle = {color: '#fff'};

  it('renders the heading with the provided title', () => {
    const {getByText} = render(<Heading title={title} />);

    expect(getByText(title)).toBeDefined();
  });

  it('applies the provided custom style to the heading', () => {
    const {getByText} = render(
      <Heading title={title} customStyle={customStyle} />,
    );

    const heading = getByText(title);
    expect(heading).toHaveStyle(customStyle);
  });

  it('applies default styles to the heading if no custom style is provided', () => {
    const {getByText} = render(<Heading title={title} />);

    const heading = getByText(title);
    const expectedStyle = {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    };
    expect(heading).toHaveStyle(expectedStyle);
  });
});
