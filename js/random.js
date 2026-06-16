const GenNum = document.getElementById("myGen");
const randomLabel = document.getElementById("randomLabel");
let Num;
const min = 1;
const max = 1000;

GenNum.onclick = function(){
    Num = Math.floor(Math.random() * (max - min) + min);
    randomLabel.textContent = Num;
}