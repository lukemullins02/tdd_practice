function capitalized(str) {
  const arr = str.split("");
  arr[0] = arr[0].toUpperCase();
  const res = arr.join("");
  return res;
}

function reverse(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(str, shift) {
  if (shift > 26) {
    while (shift > 26) {
      shift -= 26;
    }
  }

  const arr = str.split("");

  cipherUpper(arr, shift);
  cipherLower(arr, shift);

  return arr.join("");
}

function cipherUpper(arr, shift) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) <= 90 && arr[i].charCodeAt(0) >= 65) {
      console.log(arr[i].charCodeAt(0));
      if (arr[i].charCodeAt(0) + shift > 90) {
        arr[i] = String.fromCharCode(
          arr[i].charCodeAt(0) + shift - "Z".charCodeAt(0) + 64,
        );
      } else {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + shift);
      }
    }
  }
}

function cipherLower(arr, shift) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) <= 122 && arr[i].charCodeAt(0) >= 97) {
      if (arr[i].charCodeAt(0) + shift > 122) {
        arr[i] = String.fromCharCode(
          arr[i].charCodeAt(0) + shift - "z".charCodeAt(0) + 96,
        );
      } else {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + shift);
      }
    }
  }
}

function analyzeArray(arr) {
  arr.sort();
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  return {
    avg: res / arr.length,
    min: arr[0],
    max: arr[arr.length - 1],
    length: 6,
  };
}

export { capitalized, reverse, calculator, caesarCipher, analyzeArray };
