export function increment(value) {
  return Number(value) + 1;
}

export function decrement(value) {
  return Math.max(0, Number(value) - 1);
}

export function minus(value1, value2) {
  return Number(value1) - Number(value2);
}
