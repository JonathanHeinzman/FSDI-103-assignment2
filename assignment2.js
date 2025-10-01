
function temperature(){
    let Celsius = Number(prompt("Enter the temperature in Celsius"));
    let Fahrenheit = (Celsius * 9/5) + 32; 

    document.getElementById("results").innerHTML=`<p>The conversion of Celsius ${Celsius}&deg to Fahrenheit is ${Fahrenheit}&deg</p>`;
}
