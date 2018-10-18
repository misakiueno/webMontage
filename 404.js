
console.log("I'm here");

var bd = document.body;
bd.style.backgroundColor = "hotPink";

var headerElement = document.createElement('h1');
headerElement.textContent = "There is no page that exists here. Creepy";
document.body.appendChild(headerElement);
headerElement.style.color = "pink";

var headerElement3 = document.createElement('h1');
headerElement3.textContent = "There is no page that exists here. Creepy 3";
bd.appendChild(headerElement3);
headerElement3.style.color = "PaleGreen"

for ( let i = 0; i < 255; i = i + 1 ) {

    var temp = document.createElement('h1');
    temp.textContent = "a element added--" + String( i );
    temp.style.color = "LemonChiffon";

    bd.appendChild(temp);
}

var grabbed = document.getElementById("a");
grabbed.style.color = "white";
