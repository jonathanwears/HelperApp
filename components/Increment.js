// increase or decrease counter number depending on if + or -
function Increment(operator) {

  let newCounterNum = 0;

  switch (operator) {
    case '+': newCounterNum = totalNum + 1;
      break
    case '-': newCounterNum = totalNum - 1;
      break
    default: console.log('outside switch\'s operation + , - ')
  }
  return newCounterNum;
}

export default Increment;
