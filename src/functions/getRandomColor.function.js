export default () => {
  const arraySet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  const R =
    arraySet[Math.floor(Math.random() * 16)] +
    arraySet[Math.floor(Math.random() * 16)];
  const G =
    arraySet[Math.floor(Math.random() * 16)] +
    arraySet[Math.floor(Math.random() * 16)];
  const B =
    arraySet[Math.floor(Math.random() * 16)] +
    arraySet[Math.floor(Math.random() * 16)];
  return `#${R}${G}${B}`;
};
