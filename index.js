const sum = (num1, num2) => {
  if (!num1 || !num2) {
    return null;
  }
  return num1 + num2;
};
const sub = (num1, num2) => num1 - num2;

module.exports = { sum, sub };
