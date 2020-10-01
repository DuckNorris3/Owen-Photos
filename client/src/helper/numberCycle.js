const goLeft = (currentNumber, maxLength) => {
  if (currentNumber === 0) {
    return maxLength;
  } else {
    return currentNumber - 1;
  }
}

const goRight = (currentNumber, maxLength) => {
  if (currentNumber === maxLength) {
    return 0;
  } else {
    return currentNumber + 1;
  }
}

export { goLeft, goRight }