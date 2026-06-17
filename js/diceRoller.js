function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const result = document.getElementById("result");
    const images = document.getElementById("images");
    const values = [];
    const image = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        image.push(`<img src="./dice_Images/${value}.jpg">`);
    }

    result.textContent = `Dice: ${values.join(", ")}`;

    images.innerHTML = image.join(""); 
}
