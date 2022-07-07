import { render, screen } from '@testing-library/react';
import Box from './Box';

// smoke test
test('renders without crashing', () => {
  render(<Box />);
})

// snapshot test
test ('matches snapshot', () => {
  const {asFragment} = render(<Box/>);
  expect(asFragment()).toMatchSnapshot();
})
