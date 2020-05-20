import React from 'react';
import { render } from '@testing-library/react';
import PlayerDropdown from './PlayerDropdown';

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<PlayerDropdown />, div);
});