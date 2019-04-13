function flip() {
  return Math.random() >= 0.5;
}

const validateNumber =(n) => {
  let error = null;
  if(!n) error = new Error('n is required');
  if(n <= 0) error = new Error('n must be greater than 0');
  if(n > 1000000) error = new Error('n must be less than 1,000,000');
  return error;
}

const convertDecimalNumberToBinary = (n) => {
  return n.toString(2);
};

const randomBinary = (binary) => {
  return binary.split('').map(b => flip() ? '1' : '0').join('');
};

function randomNumber(n) {
  const error = validateNumber(n);
  if (error !== null) throw error;
  if(n === 1) return 0;
  
  const binary = convertDecimalNumberToBinary(n - 1);
  const random = parseInt(randomBinary(binary), 2);
  return random;
}

console.log(randomNumber(500  ));
console.log(randomNumber(1));
console.log(randomNumber(500));
console.log(randomNumber(1000001));