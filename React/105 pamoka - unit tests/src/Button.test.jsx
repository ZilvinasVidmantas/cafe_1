import { render, screen } from '@testing-library/react';
import Button from './Button';

test("Button renders it's children", () => {
  const buttonText = 'O.K.';
  render(<Button>{buttonText}</Button>);

  const button = screen.getByText(new RegExp(buttonText));
  expect(button).toBeInTheDocument();
});

test("Button handles onClick event", () => {
  // Pradiniai kintamieji
  const buttonText = 'O.K.';
  const testFunction = jest.fn();
  render(<Button onClick={testFunction}>{buttonText}</Button>);

  // Veiksmo atlikimas
  const button = screen.getByText(new RegExp(buttonText));
  button.click();

  // Rezultato tikrinimas
  expect(testFunction.mock.calls.length).toEqual(1);
});

test("Button color attribute applies to backgroundColor style", () => {
  // Pradiniai kintamieji
  const buttonText = 'O.K.';
  const color = 'rgb(255, 255, 255)';
  render(<Button color={color}>{buttonText}</Button>);

  // Veiksmo atlikimas
  const button = screen.getByText(new RegExp(buttonText));
  const style = button.style;
  const buttonColor = style.backgroundColor;

  // Rezultato tikrinimas
  expect(buttonColor).toEqual(color);
});

test("Button adds any props to component", () => {
  // Pradiniai kintamieji
  const buttonText = 'O.K.';
  const type = 'submit';
  const disabled = true;
  const role = 'button';
  const style = {
    backgroundColor: 'rgb(0, 0, 255)',
  };
  render(
    <Button
      type={type}
      disabled={disabled}
      role={role}
      style={style}
    >
      {buttonText}
    </Button>
  );

  // Veiksmo atlikimas
  const button = screen.getByText(new RegExp(buttonText));

  // Rezultato tikrinimas
  expect(button).toHaveAttribute('type', type);
  expect(button).toHaveProperty('disabled', disabled);
  expect(button).toHaveAttribute('role', role);
  expect(button).toHaveStyle(`backgroundColor: ${style.backgroundColor}`);
});

test("Button backgroundColor prioritizes color prop vs style prop", () => {
  // Pradiniai kintamieji
  const buttonText = 'O.K.';
  const style = {
    backgroundColor: 'rgb(0, 0, 255)',
  };
  const color = 'rgb(255, 255, 255)';
  render(
    <Button

      color={color}
      style={style}
    >
      {buttonText}
    </Button>
  );

  // Veiksmo atlikimas
  const button = screen.getByText(new RegExp(buttonText));

  // Rezultato tikrinimas
  expect(button).toHaveStyle(`backgroundColor: ${color}`);
});
