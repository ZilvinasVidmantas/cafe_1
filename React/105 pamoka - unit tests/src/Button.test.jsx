import { render, screen } from '@testing-library/react';
import Button from './Button';

test("Button renders it's children", () => {
  render(<Button>O.K.</Button>);

  const button = screen.getByText(/O.K./i);
  expect(button).toBeInTheDocument();
});