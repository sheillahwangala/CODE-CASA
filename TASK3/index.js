function fahrenheitToCelsius (valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }

  function celsiusToFahrenheit (valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
  }

  function resetValues() {
    document.getElementById("inputFahrenheit").value = "";
    document.getElementById("outputCelsius").innerText = "";

    document.getElementById("inputCelsius").value = "";
    document.getElementById("outputFahrenheit").innerText = "";
}

function copyToClipboard(elementId) {
  var outputElement = document.getElementById(elementId);

  var tempInput = document.createElement("input");
  tempInput.value = outputElement.innerText;

  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999); 

  document.execCommand("copy");

  document.body.removeChild(tempInput);

  alert("Copied to clipboard: " + outputElement.innerText);
}


  document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    document.getElementById("copyright-year").innerText = currentYear;
  });