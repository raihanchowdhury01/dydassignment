const fahrenheit = parseFloat(prompt("Input Fahrenheit: "));
const sm = 5 / 9;
const centrigrate = (fahrenheit-32) * sm;
document.getElementById('fahranhit').innerHTML = "degree number : " + parseInt(centrigrate) + `<sup>o</sup>`;