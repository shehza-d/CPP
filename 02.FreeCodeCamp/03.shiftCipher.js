// https://leetcode.com/problems/decode-the-slanted-ciphertext/
const rot13 = (str) => {
  let result = "";
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") result += " ";
    for (let j = 0; j < alphabets.length; j++) {
      if (str[i] == alphabets[j]) {
        let index = j + 13;
        if (index >= 26) {
          index -= 26;
        }
        result += alphabets[index];
      }
    }
  }
  return result;
};
console.log(rot13("SERR PBQR PNZC!#"));
