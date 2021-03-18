export const analyze = (arr) => {
  if (arr.length === 0) return { average: 0, min: 0, max: 0, length: 0 };
  const average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
  const min = arr.sort((a, b) => (a < b ? -1 : 1))[0];
  const max = arr.sort((a, b) => (a > b ? -1 : 1))[0];
  const length = arr.length;
  return { average, min, max, length };
};
