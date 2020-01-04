import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";

import store from "./redux/store";
import App from './App';

test('incrementer button', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const incrementer = getByText(/\+/i);
  expect(incrementer).toBeInTheDocument();
});
