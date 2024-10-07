const body = document.querySelector("body");
const div = document.createElement("div");


body.appendChild(div);
div.style.width = "300px";
div.style.height = "300px";
div.style.border = "2px black solid";


const p = document.createElement("p")
div.append(p);
p.innerHTML = "hej";

