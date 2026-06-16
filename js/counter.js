
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");
const coutLabel = document.getElementById("countLabel");
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}