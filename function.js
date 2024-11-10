const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let longPassword = document.getElementById("longpassword");
let shortPassword = document.getElementById("shortpassword");
let copyButton1 = document.getElementById("copybtn1");
let copyButton2 = document.getElementById("copybtn2");
let generateButton = document.getElementById("generatebutton");

// Declaring Function that copies a text.
function copy(content, button) {
  console.log("action properly called");
  navigator.clipboard.writeText(content.textContent).then(function () {
    button.textContent = "copied!";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 3000);
  });
}

function generatePassword(length) {
  let password = "";
  while (password.length < length) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

function passwordGenerator() {
  shortPassword.textContent = generatePassword(12);
  longPassword.textContent = generatePassword(16);
}

generateButton.addEventListener("click", passwordGenerator);
