export default function ResetZeroCounters(state, updateState) {
  // will accept the state and the updater function.
  const countersArr = Object.keys(state);
  countersArr.forEach((counter) => {
    updateState(counter, 0);
  });
}
