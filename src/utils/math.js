export function getPercentage(value, total) {
  const res = (value * 100) / total;

  return res.toFixed(2);
}
