export const getRandomArbitrary = (min = 0, max = 99999): string => {
  return `${Math.random() * (max - min) + min}`;
};
