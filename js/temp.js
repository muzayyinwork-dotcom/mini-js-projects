const textbox = document.getElementById("textbox");
const myFahrenheit = document.getElementById("myFahrenheit");
const myCelsius = document.getElementById("myCelsius");
const myResult = document.getElementById("myResult");

let temp;


function convert(){

    if(myFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        myResult.textContent = temp.toFixed(1) + "°F";

    }
    else if(myCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp-32) * (5/9);
        myResult.textContent = temp.toFixed(1) + "°C";

        
    
    }
    else{
        myResult.textContent = "Please select a Unit!"
    }

}