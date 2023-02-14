// Assignment Code
var generateBtn = document.querySelector("#generate");
var prompts = document.querySelector("#prompt");
var charRange = document.querySelector("#countChar");
var readyBtn = document.querySelector("#ready");

const specialChars = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var opt = [];
// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  const opts = document.querySelectorAll("input[name='charType']");
  opt = [];
  opts.forEach((el) => {
    if (el.checked) {
      switch (el.value) {
        case "numeric":
          opt = [...opt, ...numbers];
          break;
        case "uppercase":
          opt = [...opt, ...upperCase];
          break;
        case "lowercase":
          opt = [...opt, ...lowerCase];
          break;
        case "specialChars":
          opt = [...opt, ...specialChars];
          break;
        default:
          break;
      }
    }
  });

  if (opt.length == 0) {
    return false;
  }

  var text = "";
  while (text.length <= charRange.value) {
    const random = Math.floor(Math.random() * (opt.length - 1 - 1 + 1)) + 1;
    text += opt[random];
  }
  writePassword(text);
}

function showPrompts(params) {
  prompts.classList.toggle("d-none");
}

function countChar() {
  var count = document.querySelector("#countChar");
  document.querySelector("#characters").textContent = count.value;
}

// Add event listener to generate button
generateBtn.addEventListener("click", showPrompts);
readyBtn.addEventListener("click", generatePassword);
charRange.addEventListener("input", countChar);
document.addEventListener("DOMContentLoaded", countChar);
