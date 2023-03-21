import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Picker from './Picker';

describe('<Picker />', () => {
  test('it should mount', () => {
    render(<Picker />);
    
    const picker = screen.getByTestId('Picker');

    expect(picker).toBeInTheDocument();
  });
});