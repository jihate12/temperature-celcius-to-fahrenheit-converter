const celcius = document.querySelector('#celcius'),
 fahrenheit = document.querySelector('#fahrenheit');

// Set focus to celcius
window.addEventListener("load", () => celcius.focus());

// Convert celcius to fahrenheit
celcius.addEventListener("input", () => {
    fahrenheit.value = ((celcius.value * 9) / 5 + 32 ).toFixed(2);
    // clear fahrenheit value if celcius empty
    if(!celcius.value) fahrenheit.value = "";
});

// Convert fahrenheit to celcius
fahrenheit.addEventListener("input", () =>{
    celcius.value = (((fahrenheit.value - 32) * 5) / 9 ).toFixed(2);
    // clear celcius value if fahrenheit empty
    if(!fahrenheit.value)  celcius.value = "";
});