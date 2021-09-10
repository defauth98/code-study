import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('render a learn react link ', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})

test('Verificando se existe um botão', () => {
  const { getByRole } = render(<App />);
  const btn = getByRole('button');
  expect(btn).toBeInTheDocument();
});