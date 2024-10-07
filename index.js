const body = document.querySelector("body");
const div = document.createElement("div");


body.appendChild(div);
div.style.width = "300px";
div.style.height = "300px";
div.style.border = "2px black solid";


const p = document.createElement("p")
div.append(p);
p.innerHTML = "hej";

const b1 = document.createElement(`button`)
const b2 = document.createElement(`button`)

body.append(b1)
body.append(b2)
b1.innerHTML = "YES";
b2.innerHTML = "NO";

b1.addEventListener("click", ()=>{
    div.style.backgroundColor = "green"
})
b2.addEventListener("click", ()=>{
    div.style.backgroundColor = "red"
})
const b3 = document.createElement(`button`)
p.appendChild(b3)
b3.innerHTML = "usuń"
b3.addEventListener("click", ()=>{
    p.classList.add("remove")
})



const inp = document.createElement(`input`);
const add = document.createElement(`button`);
const list = document.createElement(`ul`);

add.innerHTML = "dodaj"
body.append(inp)
body.append(add)
body.append(list);
add.addEventListener("click", ()=>
{


    const inlist = document.createElement(`li`);
    list.appendChild(inlist);
    list.lastChild.innerHTML = inp.value;

}
)
const inp2 = document.createElement(`input`);
const okey = document.createElement(`button`);
body.appendChild(inp2);
body.appendChild(okey);
okey.innerHTML = "przejdz";

okey.addEventListener("click",()=>{
    const link = document.createElement(`a`);
    let inpL =  inp2.value;
  link.setAttribute("href",`https://${inpL}`)
  link.innerHTML = inp2.value

body.append(link);
}
)