
function temperature(){
    let Celsius = Number(prompt("Enter the temperature in Celsius"));
    let Fahrenheit = (Celsius * 9/5) + 32; 

    document.getElementById("results").innerHTML=`<p>${Fahrenheit}</p>`;
}
