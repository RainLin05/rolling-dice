const idk = document.body.querySelector("button");
idk.addEventListener("click", rollDice); 

function rollDice() {
    const roll = Math.floor(Math.random() * 5 + 1);  
    p1 = roll;
    const roll2 = Math.floor(Math.random() * 5 + 1); 
    p2 = roll2;
    display(p1, p2);
}
function display(poll , doll) {
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const total = doll + poll;
    p1.textContent = "first roll :" + poll;
    p2.textContent = "second roll:" + doll;
    p3.textContent = "total:" + total;
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);
}
