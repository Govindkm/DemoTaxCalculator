const getNegativeValue = (maxValue = 2500) => {
  // Generate an integer between 0 and the maxValue parameter (exclusive)
  const randomValue = Math.floor(Math.random() * maxValue);
  // Return the negative value of the random value
  return -randomValue;
};

const getNonNegativeNumber = (maxValue = 2500) => {
  // Generate an integer between 1 and the maxValue parameter (exclusive)
  const randomValue = Math.floor(Math.random() * maxValue) + 1;
  return randomValue;
};

const getZero = () => {
  return 0;
};

export{getNegativeValue, getNonNegativeNumber, getZero};