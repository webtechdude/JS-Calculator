let inputDisplay = document.getElementById('display');


// window.onload = function () {
//     inputDisplay.focus();
//     inputDisplay.select();
//   }

function getInput(i) {
    if (i === "=") {
        inputDisplay.value = eval(inputDisplay.value);
    }
    else if (i === "+/-") {
        inputDisplay.value = inputDisplay.value * -1;
    }   
    else if (i === "c") {
        inputDisplay.value = "";
    }
    else if (i === "DEL") {
        inputDisplay.value = inputDisplay.value.slice(0, -1);
    }
    else {
        inputDisplay.value += i;
    }
}