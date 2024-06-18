const input = "pineapple is yummy";
const find = "apple";

const finder = (input, find) => {
  return input.indexOf(find);
};

const result = finder(input, find);

console.log(result);
