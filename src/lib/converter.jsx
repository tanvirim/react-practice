export const toCelcius = (farhenheit) => {
  return ((farhenheit - 32) * 5) / 9;
};

export const toFarhenheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

export const converter = (temperature, convertTo) => {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
  }

  const output = convertTo(input);

  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
};
