// const input = "aaaabbaaccccccccccccccccccde";

// Output
// {
//    character: 'c',
//   count: 18
//   }

function cCount(input) {
  const newinput = input.toLowerCase();
  console.log(newinput);
  let count = 0;
  for (let i = 0; i < newinput.length; i++) {
    if (newinput[i] === 'c') {
      count += 1;
    }
  }
  const obj = { c: count };
  return obj;
}

console.log(cCount('aaaabbaaccccccccccccccccccde'));
// 2nd way
function allCountV1(input) {
  if (typeof input === 'string') {
    const obj = {};
    let count = 1;
    for (let i = 0; i < input.length; i++) {
      if (!obj.hasOwnProperty(input[i]) && input[i].charCodeAt() >= 97) {
        count = 1;
        obj[input[i]] = count;
      } else if (obj.hasOwnProperty(input[i])) {
        count = obj[input[i]];
        count += 1;
        obj[input[i]] = count;
      }
    }
    return obj;
  }
}
console.log(allCountV1('aaaabbaaccccccccccccccccccdeAA'));

// third way
function allCountV2(input) {
  input = input.split('');

  for (let i = 0; i < input.length; i++) {
    let count = 1;
    for (let j = 0; j < input.length; j++) {
      if (input[i] === input[j] && i !== j) {
        count += 1;
        input.splice(j, 1);
        j--;
      }
    }
    console.log(input[i], count);
  }
}
allCountV2('aaaabbaaccccccccccccccccccde');
