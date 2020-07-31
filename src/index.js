import cipher from "./cipher.js";
document.getElementById("contentAbout").style.display = "none";
document.getElementById("getNumberCipher").style.display = "none";
document.getElementById("getNumberDecipher").style.display = "none";
document.getElementById("cipherView").style.display = "none";
document.getElementById("decipherView").style.display = "none";
let clear = () => {
  document.getElementById("numberCipher").value = "";
  document.getElementById("numberDecipher").value = "";
  document.getElementById("textToCipher").value = "";
  document.getElementById("textToDecipher").value = "";
};
let showHide = (idHide) => {
  let selector = document.querySelectorAll(".showHide");
  for (let i = 0; i < selector.length; i++) {
    if (selector[i].id == idHide) {
      selector[i].classList.add("animate");
      selector[i].style.display = "block";
    } else {
      selector[i].classList.remove("animate");
      selector[i].style.display = "none";
    }
  }
};
document.getElementById("about").addEventListener("click", function () {
  document.getElementById("about").style.background="#291d75";
  document.getElementById("demo").style.background="#a7a0bd";
  showHide("contentAbout");
  clear();
});
document.getElementById("demo").addEventListener("click", function () {
  document.getElementById("demo").style.background="#291d75";
  document.getElementById("about").style.background="#a7a0bd";
  showHide("demoOptions");
  clear();
});
let buttonCipher = document.getElementsByClassName("cipher");
let i = buttonCipher.length;
while (i--) {
  buttonCipher[i].addEventListener("click", function buttonCipher() {
    document.getElementById("demo").style.background="#291d75";
    document.getElementById("about").style.background="#a7a0bd";
    showHide("getNumberCipher");
  });
}
let buttonDecipher = document.getElementsByClassName("decipher");
let j = buttonDecipher.length;
while (j--) {
  buttonDecipher[j].addEventListener("click", function buttonDecipher() {
    document.getElementById("demo").style.background="#291d75";
    document.getElementById("about").style.background="#a7a0bd";
    showHide("getNumberDecipher");
  });
}
document
  .getElementById("showInputCipher")
  .addEventListener("click", function showInputCipher() {
    const numberCipher = parseInt(
      document.getElementById("numberCipher").value
    );
    if (numberCipher > 0 && numberCipher % 26 != 0) {
      showHide("cipherView");
    } else {
      if (isNaN(numberCipher)) {
        alert("Please, enter a number");
      } else {
        alert(
          numberCipher +
            " It is not a valid number, please enter a different number"
        );
      }
    }
  });
document
  .getElementById("showInputDecipher")
  .addEventListener("click", function showInputDecipher() {
    const numberDecipher = parseInt(
      document.getElementById("numberDecipher").value
    );
    if (numberDecipher > 0 && numberDecipher % 26 != 0) {
      showHide("decipherView");
    } else {
      if (isNaN(numberDecipher)) {
        alert("Please, enter a number");
      } else {
        alert(
          numberDecipher +
            " It is not a valid number, please enter a different number"
        );
      }
    }
  });

document.getElementById("textToCipher").addEventListener("keyup", function () {
  const numberCipher = parseInt(document.getElementById("numberCipher").value);
  let textToCipher = document.getElementById("textToCipher").value;
  let textCipher = new Array();
  textCipher = cipher.encode(numberCipher, textToCipher);
  document.getElementById("textCipher").textContent = textCipher;
});
document
  .getElementById("textToDecipher")
  .addEventListener("keyup", function () {
    const numberDecipher = parseInt(
      document.getElementById("numberDecipher").value
    );
    let textToDecipher = document.getElementById("textToDecipher").value;
    let textDecipher = new Array();
    textDecipher = cipher.decode(numberDecipher, textToDecipher);
    document.getElementById("textDecipher").textContent = textDecipher;
  });
//Copy to clipboard
function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

document.getElementById("copyCipher").addEventListener("click", function () {
  copiarAlPortapapeles("textCipher");
});
document.getElementById("copyDecipher").addEventListener("click", function () {
  copiarAlPortapapeles("textDecipher");
});
