const titleCase  = function(text) {
  text = text.toLowerCase();
  let textArray = text.split(' ');
  for (let i in textArray) {
    textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
  }
  return textArray.join(' ');
};

console.log(titleCase('yo dawg get the bread'));